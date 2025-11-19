<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// API-reitti
Route::get('/api/test', function () {
    return ['status' => 'ok', 'message' => 'API toimii!'];
});