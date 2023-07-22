<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CasesController extends Controller
{
    // 提案
    public function insertCase(Request $request)
    {
        $myuserID = $request->input('myuserID');
        $mycaseName = $request->input('mycaseName');
        $mybigClassID = $request->input('mybigClassID');
        $myclassID = $request->input('myclassID');
        $mybudget = $request->input('mybudget');
        $mydeadline = $request->input('mydeadline');
        $mycity = $request->input('mycity');
        $mydescription = $request->input('mydescription');
        $mycontactName = $request->input('mycontactName');
        $mycontactPhone = $request->input('mycontactPhone');
        $mycontactTime = $request->input('mycontactTime');
        $mycaseStatus = $request->input('mycaseStatus');
        $myimageA = $request->input('myimageA');
        $myimageB = $request->input('myimageB');
        $myimageC = $request->input('myimageC');
        $myimageD = $request->input('myimageD');
        $myimageE = $request->input('myimageE');

        try {
            DB::select("CALL addMyCase(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [$myuserID, $mycaseName, $mybigClassID, $myclassID, $mybudget, $mydeadline, $mycity, $mydescription, $mycontactName, $mycontactPhone, $mycontactTime, $mycaseStatus, $myimageA, $myimageB, $myimageC, $myimageD, $myimageE]);

            if ($mycaseStatus == '草稿') {
                $result = '案件已儲存至草稿';
            } elseif ($mycaseStatus == '刊登中') {
                $result = '案件已刊登';
            }

            return response()->json(['result' => $result]);
        } catch (\Exception $e) {
            return response()->json(['result' => '插入案件失败']);
        }
    }

    // 搜尋並返回特定條件的案例
    public function getCases(Request $request)
    {
        $page = $request->input('page');
        $categories = $request->input('categories');

        $results = DB::select('CALL caseFilter(?, ?)', [$page, $categories]);

        return response()->json($results);
    }


    // 用id查詢特定案件   get

    public function getCaseBYID(Request $request) 
    {
        // 獲取mycaseID和myuserID
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');

        // 執行存儲過程
        $result = DB::select("CALL enterCase(?, ?)", [$mycaseID, $myuserID]);

        // 將結果返回
        return response()->json($result);
    }



    // 刊登中案例列表，每頁顯示30筆
    public function selectCases(Request $request)
    {
        $page = $request->input('page');
        $pagehead = ($page - 1) * 30;

        $results = DB::select('CALL enterCasePage(?)', [$pagehead]);

        return response()->json($results);
    }

    // 檢查紀錄
    public function insertBidder(Request $request)
    {
        // 獲取傳遞的參數
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');
        $myquotation = $request->input('myquotation');
        $mywin = $request->input('mywin');
        $myselfRecommended = $request->input('myselfRecommended');

        // 執行存儲過程
        DB::select("CALL newBidder(?, ?, ?, ?, ?)", [$mycaseID, $myuserID, $myquotation, $mywin, $myselfRecommended]);

        // 返回成功消息
        return response()->json(['result' => '報價成功']);
    }





    // 提供bidder案件提供案件詳細訊息
    public function checkStatus(Request $request)
    {
        $mycaseID = $request->input('mycaseID');
        $myuserID = $request->input('myuserID');

        try {
            DB::select('CALL checkBidStatus(?, ?, @result)', [$mycaseID, $myuserID]);

            $statusResult = DB::select('SELECT @result AS result')[0]->result;

            if ($statusResult == '已報價') {
                $caseResult = DB::select('SELECT "已報價" as result, users.userID, profilePhoto, caseID, caseName, deadline, description, contactName, contactPhone, contactTime, budget, city, updateTime, imageA, imageB, imageC, imageD, imageE
                                         FROM mycase, users
                                         WHERE mycase.userID = users.userID AND mycase.caseID = ?', [$mycaseID]);
            } else {
                $caseResult = DB::select('SELECT "未報價" as result, users.userID, profilePhoto, caseID, caseName, deadline, description, contactName, contactPhone, contactTime, budget, city, updateTime, imageA, imageB, imageC, imageD, imageE
                                         FROM mycase, users
                                         WHERE mycase.userID = users.userID AND mycase.caseID = ?', [$mycaseID]);
            }

            return response()->json($caseResult);
        } catch (\Exception $e) {
            return response()->json(['error' => '呼叫存儲過程失敗']);
        }
    }



}