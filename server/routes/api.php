<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//UserController
Route::post('/auth/signup', [UserController::class, 'signup']);
Route::post('/auth/login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [UserController::class, 'logout']);


// CasesController
Route::post('/case/proposal', [CasesController::class, 'insertCase']);
Route::post('cases/addCase', [CasesController::class, 'insertCase']);
Route::get('cases/search', [CasesController::class, 'selectCases']);
Route::get('cases', [CasesController::class, 'getCases']);
Route::post('cases/checkstatus', [CaseController::class, 'checkStatus']);

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

// 綠界
Route::post('/payment/pay', [PaymentController::class, 'payByECPay']);
Route::post('payment/pay', [PaymentController::class, 'payByECPay']);

