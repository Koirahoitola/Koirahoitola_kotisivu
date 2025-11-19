<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json([
        'status' => 'ok',
        'message' => 'API toimii api.php:n kautta!'
    ]);
});