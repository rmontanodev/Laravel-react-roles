<?php

use App\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::middleware(["check_user_role:managment"])->group(function () {
    Route::get('/admin/getusers','UsersRoleController@index');
    Route::get('/admin/getusers/edit/{id}','UsersRoleController@edit');
    Route::get('/admin/getroles/json',function(){
        return json_encode(Role::getRoleList());
    });
    Route::put('/admin/addrole','UsersRoleController@update')->name('add_rol');
    Route::put('/admin/delrole','UsersRoleController@delete')->name('del_rol');
    Route::get('/admin/roles/create','UsersRoleController@create');
    Route::post('/admin/roles/store','UsersRoleController@store');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
