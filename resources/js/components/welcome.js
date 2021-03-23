import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render(){
        function gotoRolesJSON(){
            window.location.replace("/admin/getroles/json");
        }
        function gotoRoles(){
            window.location.replace("/admin/getusers");
        }
        return (
            <div class="col-md-8 offset-md-3 row">
                <h5>Laravel React prueba técnica</h5>
                <div class="col-md-6 row">
                    <button onClick={()=>{gotoRolesJSON()}} class="btn-success col-md-4 btn-sep">Check JSON roles</button>
                    <button onClick={()=>{gotoRoles()}} class="btn-primary col-md-4">Check Roles</button>
                </div>
            </div>
        )
    }
}

export default Welcome;
if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome/>, document.getElementById('welcome'));
}
