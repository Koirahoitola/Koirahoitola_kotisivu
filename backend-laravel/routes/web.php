<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return view('welcome');
});

// API-reitti
Route::get('/api/test', function () {
    return ['status' => 'ok', 'message' => 'API toimii!'];
});

Route::resource('posts', PostController::class);