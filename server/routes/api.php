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
Route::post('/auth/logout', [UserController::class, 'logout']);


// CasesController
Route::post('cases/addCase', [CasesController::class, 'insertCase']); // 新增案件
Route::get('cases/search', [CasesController::class, 'selectCases']);
Route::post('cases', [CasesController::class, 'getCases']); // 取得所有案件
Route::get('cases/getCitys', [CasesController::class, 'getCitys']); // 取得地區類別
Route::get('cases/getCategorys', [CasesController::class, 'getCategorys']); // 取得母類別
Route::get('cases/getSubCategorys', [CasesController::class, 'getSubCategorys']); // 取得子類別
Route::post('cases/checkstatus', [CaseController::class, 'checkStatus']);

//InformationController
// prefix是前綴，域名/api/upload-photo
// Route::group(['prefix' => 'api'], function () {
    Route::get('enterprofile/{token}',[InformationController::class, 'enterProfile']);
    Route::post('upload-photo', [InformationController::class, 'uploadPhoto']);
    Route::post('update-user/{myUserID}/{myUserName}', [InformationController::class, 'updateUser']);
    Route::post('update-phone/{myuserID}/{myphone}', [InformationController::class, 'updatePhone']);
    Route::post('update-email/{myuserID}/{myemail}', [InformationController::class, 'updateEmail']);
    Route::post('update-portfolio/{myuserID}/{myportfolio}', [InformationController::class, 'updatePortfolio']);
    Route::post('update-skills', [InformationController::class, 'updateSkills']);
// });

// 綠界
Route::post('/payment/pay', [PaymentController::class, 'payByECPay']);
Route::post('payment/pay', [PaymentController::class, 'payByECPay']);

