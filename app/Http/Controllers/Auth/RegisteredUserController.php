<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\DailyWorkload;
use App\Models\User;
use App\Models\WorkSetting;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'company_name' => $request->company,
            'super' => 1,
        ]);

        if ($user) {
            $company = $this->createCompany($user, $request->company);

            $user->update([
                'company_id' => $company->id
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    private function createCompany(User $user, string $nameCompany): Company
    {
        $company = Company::create([
            'name' => $nameCompany,
            'owner_id' => $user->id
        ]);

        if ($company) {
            $this->createWorkSettings($company);
        }

        return $company;
    }

    private function createWorkSettings(Company $company): void
    {
        $workSetting = WorkSetting::create([
            'company_id' => $company->id,
            'workload' => 220,
            'overtime' => 0
        ]);

        $days = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
        ];

        foreach ($days as $day) {
            DailyWorkload::create([
                'day' => $day,
                'start' => '8:00',
                'launch' => '11:30',
                'back' => '12:30',
                'end' => '18:00',
                'work_setting_id' => $workSetting->id,
            ]);
        }
    }
}
