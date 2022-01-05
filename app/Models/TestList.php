<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TestPlan;
use App\Models\Question;

class TestList extends Model
{
    protected $fillable = [
        'id',
        'title',
    ];

    protected $table ="test_lists";

    public function testLists()
    {
        return $this->hasMany(TestPlan::class);
    }

    public function testListQuestion()
    {
        return $this->belongsTo(Question::class);
    }

    public function getTestList() 
    {
        $testList = TestList::all();
        return $testList;
    }
}
