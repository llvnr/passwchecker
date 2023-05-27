<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'passwchecker'
], function ($router) {

    Route::post('/utilisation', function() {

        // $clientIP = request()->ip();

        Log::info("[PassWChecker] - Le service a vérifier un mot de passe qui répond aux standard de sécurité.");

        return response()->json(true);

    });

});