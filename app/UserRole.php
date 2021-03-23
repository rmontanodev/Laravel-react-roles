<?php

namespace App\Role;
use App\Role;
use Illuminate\Database\Eloquent\Model;

/***
 * Class UserRole
 * @package App\Role
 */

class UserRole extends Model
{
    protected $table = 'roles_users';
    public function __construct($user_id)
    {
        $this->user_id = $user_id;       
    }
   //@return UserRole
    public function addUsertoRole($role){
        $role_id = Role::getRoleID($role);
        $this->role_id = $role_id;
        $this->save();
        return $this;
    }
    //@return bool
    public function hasRole($role){
        $roles = $this->getRoles();
        if(!empty($roles)){
            return in_array($role, $roles);
        }
        return false;
    }
    //@return Array of roles
    public function getRoles(){
        $roles_id =  $this::where(['user_id'=>$this->user_id])->pluck('role_id');
        $arr_roles_name = array();
        foreach ( $roles_id as $rol_id) {
            array_push($arr_roles_name,Role::getRoleNameByID($rol_id));
        }
        return $arr_roles_name;
    }
    //@return bool 
    public function removeRolefromUser($role){
        $role_id = Role::getRoleID($role);
        $res = UserRole::where(['user_id'=>$this->user_id,'role_id'=>$role_id])->delete();
        return $res;
    }
    //@return int
    public function getHighestHierachy(){
        $roles = $this->getRoles();
        //Set 3 for max hierachy score, it should be changed if its dinamically
        $hierachy = 3;
        if($roles){
            $rol = new Role();
            foreach ($roles as $rol) {
                $rol->name = $rol;
                $hierachy_score = $rol->getHierarchy();
                if($hierachy_score<$hierachy){
                    $hierachy = $hierachy_score;
                }
            }
        }
        return $hierachy;
        
    }

}
