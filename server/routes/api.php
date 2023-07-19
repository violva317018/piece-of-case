<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\PaymentController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//UserController
Route::post('/auth/signup', [UserController::class, 'signup']);
Route::post('/auth/login', [UserController::class, 'login'])->name('login');
Route::middleware('auth:sanctum')->post('logout', [UserController::class, 'logout']);


//InformationController
// prefix是前綴，域名/api/upload-photo
Route::group(['prefix' => 'api'], function () {
    Route::post('upload-photo', [InformationController::class, 'uploadPhoto']);
    Route::post('update-user/{myUserName}/{myUserID}', [InformationController::class, 'updateUser']);
    Route::post('update-phone/{myuserID}/{myphone}', [InformationController::class, 'updatePhone']);
    Route::post('update-email/{myuserID}/{myemail}', [InformationController::class, 'updateEmail']);
    Route::post('update-portfolio/{myuserID}/{myportfolio}', [InformationController::class, 'updatePortfolio']);
    Route::post('update-skills', [InformationController::class, 'updateSkills']);
});


// Route::post('/payment/pay', [PaymentController::class, 'payByECPay']);
Route::post('payment/pay', [PaymentController::class, 'payByECPay']);

