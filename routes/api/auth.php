<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::group([
  'middleware' => ['jwt.auth'],
  'prefix' => 'auth'

], function ($router) {
  Route::post('/logout', 'API\AuthController@logout');
  Route::get('/user-profile', 'API\AuthController@userProfile');
});

Route::group([
  'middleware' => ['jwt.refresh'],
  'prefix' => 'auth'

], function ($router) {
  Route::post('/refresh', 'API\AuthController@refresh');
});

Route::group([
  'prefix' => 'auth'

], function ($router) {
//   Route::post('/login', 'API\AuthController@login');
    Route::post('/login', [AuthController::class, 'login']); 

  Route::post('/register', 'API\AuthController@register');
});

