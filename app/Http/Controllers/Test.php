<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestPlan;
use App\Models\TestList;

class Test extends Controller
{
    public function getPlanList() 
    {
        $plan = new TestPlan();
        $list = $plan->getPlan();    
        return response()->json($list, 200);
    }
}
