<?php

namespace App\Http\Controllers;

use App\User;
use App\Role\UserRole;
use App\Role;
use Illuminate\Http\Request;

class UsersRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_role = User::get();
        foreach ($users_role as $user) {
            $user_role = new UserRole($user->id);
            $user['roles_activo'] =$user_role->getRoles();
        }
        $users_role = json_encode(['users'=>$users_role]);
        return view('UsersRole.index',compact('users_role'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $possible_roles = Role::getRoleList();
        return view('Usersrole.create',compact('possible_roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = new Role();
        $role->name = $request->input('role_name');
        $role->hierarchy =$request->input('hierarchy');
        $role->save();
        $previousUrl = app('url')->previous();
        return redirect()->to($previousUrl.'?'. http_build_query(['created'=>true,'role_name'=>$role->name]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user_info = User::find($id);
        $possible_roles = Role::getRoleList();
        $user_role = new UserRole($id);
        $array_data = json_encode(['user_info'=>$user_info,'possible_roles'=>$possible_roles,'sus_roles'=>$user_role->getRoles()]);
        return view('UsersRole.edit',compact('array_data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       $user = User::find($request->input('id'));
       $role_to_add = $request->input('add-role');
       $user_role = new UserRole($user['id']);
       $user_role->addUsertoRole($role_to_add);
       $user_role->save();
       return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $user = User::find($request->input('id'));
        $role_to_delete = $request->input('del-role');
        $user_role = new UserRole($user['id']);
        $user_role->removeRolefromUser($role_to_delete);
        return redirect()->back();
    }

}
