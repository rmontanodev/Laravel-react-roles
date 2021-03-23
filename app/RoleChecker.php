<?php

namespace App\Role;

use App\Role\UserRole;

/**
 * Class RoleChecker
 * @package App\Role
 */
class RoleChecker
{
    /**
     * @param UserRole $user
     * @param string $role
     * @return bool
     */
    public function check(UserRole $user, $role = false)
    {
        // Admin has everything
        if ($user->hasRole('admin')) {
            return true;
        }
        if($role){
            if ($user->hasRole($role)) {
                return true;
            }
        }
        return false;
    }
}