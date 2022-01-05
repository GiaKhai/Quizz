<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Answer;
use App\Models\TestList;
use App\Models\TestListQuestion;


class Question extends Model
{
    protected $fillable = [
        'id',
        'question',
    ];

    protected $table = 'questions';
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function testlistQuestion()
    {
        return $this->belongsTo(TestList::class,'testlist_question','test_id','question_id');
    }

    public function getListQuestion() 
    {
        $ques = Question::with('answers')->get();
        return $ques;
    }

    /**
    * 
    @param {id}  
    * @returns listques
    */
    public function getListQuestionById($id) 
    {
        $listques = Question::join('testlist_question','questions.id','testlist_question.question_id')->with('answers')->where("test_id",$id)->get();
        return $listques;
    }
}
