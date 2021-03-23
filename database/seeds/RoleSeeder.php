<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(
            [
                'name' =>'admin',
                'hierarchy' => 1
            ]  
        );
        DB::table('roles')->insert(
            [
                'name' =>'managment',
                'hierarchy' => 2
            ]  
        );
        DB::table('roles')->insert(
            [
                'name' =>'guest',
                'hierarchy' => 3
            ]  
        );
    }
}
