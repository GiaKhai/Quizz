<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => env('ADMIN_NAME', 'test1'),
            'email' => env('ADMIN_NAME', 'test1@gmail.com'),
            'password' => Hash::make(env('ADMIN_PASSWORD', 'admin123')),
            'is_verified' => '1'        
        ]);
    }
}
