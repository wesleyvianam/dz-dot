<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterMemberController extends Controller
{
    public function register(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make(12345678),
            'company_id' => Auth::user()->company_id,
            'team_id' => $request->team_id ?? null,
            'super' => 0,
        ]);

        if ($request->callback) {
            return to_route("$request->callback");
        }

        return to_route('members.index');
    }
}
