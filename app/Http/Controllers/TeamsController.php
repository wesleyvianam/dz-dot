<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class TeamsController extends Controller
{
    public function index(): Response
    {
        $teams = DB::table('teams as t')
            ->where('t.company_id', '=', Auth::user()->company_id)
            ->select([
                't.id',
                't.name',
                't.company_id',
            ])
            ->get();


        return Inertia::render('Team/Index', [
            'teams' => $teams
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Team/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        Team::create([
            'name' => $request->name,
            'description' => $request->description,
            'company_id' => Auth::user()->company_id,
        ]);

        return to_route('teams.index');
    }
}
