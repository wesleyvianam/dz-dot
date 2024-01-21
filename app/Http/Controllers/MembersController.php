<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class MembersController extends Controller
{
    public function index(): Response
    {
        $members = DB::table('users as u')
            ->leftJoin('teams as t', 't.id', '=' ,'u.team_id')
            ->where('u.company_id', '=', Auth::user()->company_id)
            ->select([
                'u.id',
                'u.name',
                'u.email',
                'u.super',
                'u.company_id',
                't.id as team_id',
                't.name as team_name',
            ])
            ->get();

        return Inertia::render('Member/Index', [
            'members' => $members
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Member/Create');
    }
}
