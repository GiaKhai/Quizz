<?php

namespace App\Http\Controllers;
use App\Models\TestList;
use App\Models\TestListQuestion;
use App\Models\Question;

use Illuminate\Http\Request;

class TestListController extends Controller
{
    public function getTestList() 
    {
        $testList = new TestList();
        $list = $testList->getTestList();    
        return response()->json($list, 200);    
    }

    public function getTestListbyId(Request $request, $id) 
    {
        $list = new Question();
        $item = $list->getListQuestionById($id);    
        return response()->json($item, 200);   
    }

    public function destroy($id)
    {
        return TestList::destroy($id);
    }

}
