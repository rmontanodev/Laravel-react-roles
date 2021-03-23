
    <head>
    <link href="{{ asset('css/editrole.css') }}" rel="stylesheet"/>

    </head>

    <body>
    @include('layouts.app') 
       <div id="edituser" data="{{ $array_data }}" token="{{csrf_token()}}"></div>
    </body>
