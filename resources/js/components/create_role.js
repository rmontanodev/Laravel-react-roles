import React from 'react';
import ReactDOM from 'react-dom';

class Create_role extends React.Component {
    constructor(props){
        super(props);
        const data = JSON.parse(this.props.data)
        console.log(this.props)
        this.state = {
            roles: data.data,
            token: this.props.token,
            created: false,
            new_role: ''
        }
        if(data.created){
            this.state.created = true;
            this.state.new_role = data.name
        }
    }
    render(){
        function gotoList(){
            window.location.replace("/admin/getusers");
        }
        return (
            <div class="col-md-12">
            {(() => {
                var url_string = window.location.href
                var url = new URL(url_string)
                var created = url.searchParams.get("created")
                var role_name = url.searchParams.get("role_name")
                var newURL = location.href.split("?")[0];
                window.history.pushState('object', document.title, newURL);
                if (created) {
                return (
                    <div class="alert alert-success" role="alert">
                    El nuevo rol {role_name} se ha creado
                    </div>
                )
                } 
            })()}
            <div class="col-md-3 offset-md-4">
                <div class="card">
                <h5 class="card-header">Crear nuevo Rol <img class="edit-back" onClick={()=>{gotoList()}} src="../../../back.png"></img></h5>
                <div class="col-md-12 card-body">
                    <form action="/admin/roles/store" method="post">
                            <input type="hidden" name="_token" value={this.state.token} />
                    <label>Nombre del nuevo Rol</label>  <input type="text" name="role_name"></input>
                    <label>Puntos de jerarquia</label>
                    <select class="form-select" name="hierarchy">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" selected>3</option>
                    </select>
                    <input type="Submit" class="btn-success btn-send"></input>
                    </form>
                </div>
                </div>
            
        </div>
        </div>
        )
    }
}

export default Create_role;
if (document.getElementById('createrole') && document.getElementById('createrole').getAttribute('newrole')) {
    var data = document.getElementById('createrole').getAttribute('data')
    document.getElementById('createrole').removeAttribute('data')
    var token = document.getElementById('createrole').getAttribute('token')
    document.getElementById('createrole').removeAttribute('token')
    var new_role = document.getElementById('createrole').getAttribute('newrole')
    document.getElementById('createrole').removeAttribute('newrole')
    ReactDOM.render(<Create_role data={data} token={token} newrole={new_role}/>, document.getElementById('createrole'));
}
else if (document.getElementById('createrole') ) {
    var data = document.getElementById('createrole').getAttribute('data')
    document.getElementById('createrole').removeAttribute('data')
    var token = document.getElementById('createrole').getAttribute('token')
    document.getElementById('createrole').removeAttribute('token')
    ReactDOM.render(<Create_role data={data} token={token}/>, document.getElementById('createrole'));
}

