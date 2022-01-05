<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TestlistQuestion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testlist_question', function (Blueprint $table) {
            $table->integer("test_id")->unsigned();
            $table->foreign("test_id")->references("id")->on("test_lists")->onDelete('cascade');
            $table->integer("question_id")->unsigned();
            $table->foreign("question_id")->references("id")->on("questions")->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
