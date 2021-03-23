    <head>
    <link href="{{ asset('css/create.css') }}" rel="stylesheet"/>

    </head>

    <body>
    @include('layouts.app') 
        <div id="createrole" data="{{ $possible_roles }}" token="{{csrf_token()}}"></div>
    </body>
</html>