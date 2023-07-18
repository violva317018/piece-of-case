<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Auth
Route::get('/auth',[AuthController::class,'hello']);
Route::post('/auth/signup',[AuthController::class,'handleRegister']);
Route::post('/auth/login',[AuthController::class,'handleLogin']);