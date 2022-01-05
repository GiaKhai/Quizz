<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TestList;
use App\Models\Question;

class TestListQuestion extends Model
{
    protected $fillable = [
        'test_id',
        'question_id',
    ];

    protected $table ="testlist_question";

    public function testlists()
    {
        return $this->hasMany(TestList::class,'test_id');
    }
    public function questions()
    {
        return $this->hasMany(Question::class,'question_id');
    }
}
