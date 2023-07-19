<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CasesController extends Controller
{    

    // 提案
    public function insertCase(Request $request)
{
   
    $userID = $request->input('userID');
    $caseName = $request->input('caseName');
    $bigClassID = $request->input('bigClassID');
    $classID = $request->input('classID');
    $budget = $request->input('budget');
    $deadline = $request->input('deadline');
    $location = $request->input('location');
    $description = $request->input('description');
    $contactName = $request->input('contactName');
    $contactPhone = $request->input('contactPhone');
    $contactTime = $request->input('contactTime');
    $caseStatus = $request->input('caseStatus');
    $imageA = $request->input('imageA');
    $imageB = $request->input('imageB');
    $imageC = $request->input('imageC');
    $imageD = $request->input('imageD');
    $imageE = $request->input('imageE');
    // try {
    //     DB::select("CALL addCase(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [$userID, $caseName, $bigClassID, $classID, $budget, $deadline, $city, $description, $contactName, $contactPhone, $contactTime, $caseStatus, $imageA, $imageB, $imageC, $imageD, $imageE]);

    //     if ($caseStatus == '草稿') {
    //         $result = '案件已儲存至草稿';
    //     } elseif ($caseStatus == '刊登中') {
    //         $result = '案件已刊登';
    //     }

    //     return response()->json(['result' => $result]);
    // } catch (\Exception $e) {
    //     return response()->json(['result' => '插入案件失败']);
    // }
    $result = DB::select("call addMyCase('userID' , 'caseName' ,  'bigClassID' , 'classID' , 'budget' , 'deadline' ,'location' , 'description' , 'contactName' , 'contactPhone' , 
   'contactTime' , 'caseStatus' , 'imageA' , 'imageB' , 'imageC' , 'imageD ', 'imageE' )");
   return $result;
}

}
