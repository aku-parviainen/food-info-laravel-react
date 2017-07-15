<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Localization (generate and cache global json file with translations)
Route::get('/js/lang.js', function () {
    //$strings = Cache::rememberForever('lang.js', function () {
        $strings = "";
        $lang = config('app.locale');

        $files   = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name           = basename($file, '.php');
            $strings[$name] = require $file;
        }

        //return $strings;
    //});

    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');

/* 
 * Redirect everything else to react app, where further routing is handled via react-router 
 * Must be at bottom as the last route!
 */
Route::any('{query}', function() { 
    return view('home'); 
})->where('query', '.*');