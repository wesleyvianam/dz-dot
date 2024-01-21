<?php

namespace App\Http\Controllers;

use App\Models\DailyWorkload;
use App\Models\Team;
use App\Models\WorkSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class WorkSettingsController extends Controller
{
    public function index(): Response
    {
        $settings = DB::table('work_settings as w')
            ->join('companies as c','c.id','=','w.company_id')
            ->leftJoin('teams as t','t.id','=','w.team_id')
            ->where('w.company_id','=', Auth::user()->company_id)
            ->select([
                'w.id',
                'c.name as company_name',
                't.name as team_name',
            ])
            ->get();

        return Inertia::render('Setting/Index', [
            'settings' => $settings
        ]);
    }

    public function create(): Response
    {
        $teams = DB::table('teams as t')
            ->join('work_settings as ws', 'ws.team_id', '<>','t.id')
            ->select([
                't.id',
                't.name',
            ])
            ->get();

        return Inertia::render('Setting/Create', [
            'teams' => $teams
        ]);
    }

    public function store(Request $request)
    {
        $days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        $daysFormat = [];
        foreach ($request->request as $key => $data) {
            $key = explode('.', $key);
            if (in_array($key[0], $days)) {
                $daysFormat[$key[0]][$key[1]] = $data;
            }
        }

        $workSetting = WorkSetting::create([
            'overtime' => $request->overtime,
            'workload' => $request->workload,
            'team_id' => $request->team_id,
            'company_id' => Auth::user()->company_id,
        ]);

        foreach ($daysFormat as $key => $day) {
            DailyWorkload::create([
                'day' => $key,
                'start' => $day['start'],
                'launch' => $day['launch'],
                'back' => $day['back'],
                'end' => $day['end'],
                'work_setting_id' => $workSetting->id,
            ]);
        }

        return to_route('settings.index');
    }

    public function edit(WorkSetting $workSetting): Response
    {
        $days = DailyWorkload::where('work_setting_id', $workSetting->id)->get();

        return Inertia::render('Setting/Edit', [
            'workSetting' => $workSetting,
            'days' => $days,
        ]);
    }

    public function update(): Response
    {
        return Inertia::render('Setting/Create');
    }

    public function destroy(WorkSetting $workSetting): RedirectResponse
    {

        return to_route('settings.index');
    }
}
