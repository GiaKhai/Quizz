<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTestlistIdInTestPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('test_plans', function (Blueprint $table) {
            $table-> unsignedInteger("testlist_id")-> after("id");
            $table-> foreign("testlist_id")->references("id")->on("test_lists")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('test_plans', function (Blueprint $table) {
            //
        });
    }
}
