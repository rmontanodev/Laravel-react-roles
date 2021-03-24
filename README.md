## Prerequisites
### If you won't execute the project on docker, I recommend you to have AMP(xampp,lamp...)

## - In order to install this project and it's dependencies we need to do the follow steps:

### git clone https://github.com/rmontanodev/Laravel-react-challenge.git
### cd Laravel-react-challenge
### composer install
### npm install

## - Now we need to set up our DB on .env file, to do this copy .env.example and rename it to .env
![image](https://user-images.githubusercontent.com/34578888/112130865-34798a80-8bc9-11eb-98ef-0de97afef9a6.png)
#### - As wee see on the image we need to configure our DB connection, change it to your configuration.

#### - After that, we need to execute the migrations and seeder that has the project, this project only has seeder for roles for testing purposes so lets execute

### php artisan migrate:refresh --seed

#### Now only left is to create a key
### - php artisan key:generate

## -Now we are ready to see the application, to do that we will need to execute those commands:
### npm run dev
### php artisan serve

#### Now open http://127.0.0.1:8000/ (maybe your port is different)

## - To create an user with a command, type this on terminal project, this user created has not any role so it does not have any permission

### php artisan tinker
### \App\User::create(['name'=>'admin','email'=>'admin@admin.cat','password'=>bcrypt('lapassword')]);

#### By default and for testing porpuses when you create a new user via UX it will have the role of "managment" and can check json roles and check roles
![image](https://user-images.githubusercontent.com/34578888/112132890-64c22880-8bcb-11eb-8da5-db1ecc57ea63.png)

## For docker
### git clone https://github.com/rmontanodev/Laravel-react-challenge.git
### docker-compose up -d
### docker-compose exec app php artisan key:generate
### docker-compose exec app php artisan config:cache
### docker-compose exec db bash
### mysql -u root -p
### GRANT ALL ON laravel.* TO 'root'@'%' IDENTIFIED BY '';
### FLUSH PRIVILEGES
### EXIT
### EXIT
### docker-compose exec app php artisan migrate:refresh --seed
