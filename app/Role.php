<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $timestamps = false;
     /**
     * The users that belong to the role.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
     /***
     * @return array
     */
    public static function getRoleList()
    {
        return Role::get()->pluck('name');
    }
    // @return Role ID
    public static function getRoleID($role_name){
        $role = Role::where('name',$role_name)->get('id');
        return $role[0]['id'];
    }
    public function getHierarchy(){
        return $this::where('id',$this->id)->orWhere('name',$this->name)->get('hierachy');
    }
    public static function getRoleNameByID($role_id){
        $role = Role::where('id',$role_id)->get('name');
        return $role[0]['name'];
    }
}
