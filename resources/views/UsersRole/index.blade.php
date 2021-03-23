
    <head>
    <link href="{{ asset('css/indexrole.css') }}" rel="stylesheet"/>

    </head>
    <body>
    @include('layouts.app') 
       <div id="users" data='{{ $users_role }}'></div>
    </body>
</html>