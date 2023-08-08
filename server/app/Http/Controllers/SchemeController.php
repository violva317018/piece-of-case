<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SchemeController extends Controller
{

    // 傳入排程狀態 => 【SchemeProgress】
    public function newCaseStep(Request $request)
    {
        $schemeJson = $request['schemeJson'];
        // $caseID = $request['schemeJson']['caseID'];
        // $detail = $request['schemeJson']['detail'];
        // $money = $request['schemeJson']['money'];
        // $stepDeadline = $request['schemeJson']['stepDeadline'];
        // $schemeJsonData = json_decode($schemeJson, true);
        // return [$caseID, $detail, $money, $stepDeadline];
        $bidderID =  (int)$request['bidderID'];
        $results = DB::select('CALL newCaseStep(?, ?)', [$schemeJson, $bidderID])[0]->result;
        return $results;
    }
}