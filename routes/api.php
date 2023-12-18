<?php

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/home', function () {
        return response()->json(["message" => "voce está logado!"]);
    });

    Route::post('logout', [LogoutController::class, 'logout']);
});

Route::group([], function () {
    Route::post('register', [RegisterController::class, 'register']);

    Route::post('login', [AuthenticationController::class, 'login']);
});
