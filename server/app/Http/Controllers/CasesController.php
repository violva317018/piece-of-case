<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CasesController extends Controller
{

    // 提案
    public function insertCase(Request $request)
{
    $userID = $request->input('userID');
    $name = $request->input('name');
    $category = $request->input('category');
    $subCategory = $request->input('subCategory');
    $budget = $request->input('budget');
    $deadline = $request->input('deadline');
    $city = $request->input('city');
    $subCity = $request->input('subCity');
    $description = $request->input('description');
    $contactName = $request->input('contactName');
    $contactPhone = $request->input('contactPhone');
    $contactTime = $request->input('contactTime');
    $status = $request->input('status');
    $imageA = $request->input('imageA');
    $imageB = $request->input('imageB');
    $imageC = $request->input('imageC');
    $imageD = $request->input('imageD');
    $imageE = $request->input('imageE');

    try {
        DB::select("CALL addMyCase($userID,'$name','$category','$subCategory','$budget','$deadline','$city','$subCity','$description','$contactName','$contactPhone','$contactTime','$status','$imageA','$imageB','$imageC','$imageD','$imageE')");
        if ($status == '草稿') {
        $result = '案件已儲存至草稿';
    } elseif ($status == '刊登中') {
        $result = '案件已刊登';
    }
    return response()->json(['result' => $result]);
    } catch (\Exception $e) {
        return response()->json(['result' => '插入案件失败']);
    }
    // $result = DB::select("CALL addMyCase($userID,'$name','$category','$subCategory','$budget','$deadline','$city','$subCity','$description','$contactName','$contactPhone','$contactTime','$status','$imageA','$imageB','$imageC','$imageD','$imageE')");
    // CALL addMyCase('17','test10','B','B03','20000','2000/12/23','台南市','東區','good','test','true','0110','發布案件','null','null','null','null','null');
    // return $result;
}

}
