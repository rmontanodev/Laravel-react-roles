import React from 'react';
import ReactDOM from 'react-dom';

class Users_role extends React.Component {
    constructor(props){
        super(props);
        const data = JSON.parse(this.props.data)
        this.state = {
            users: data.users,
        }
    }
    render(){
        function gotoEdit(id){
            window.location.replace("/admin/getusers/edit/"+id);
        }
        function gotoCreateRole(){
            window.location.replace("/admin/roles/create");
        }
        return (
            <div class="col-md-8 offset-md-2">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rol <button class="btn-success btn-add-roles" onClick={()=>{gotoCreateRole()}}><img src="../add_role.png"></img></button></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((element,index) => 
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>
                            {(() => {
                                if (element.roles_activo) {
                                return (
                                    element.roles_activo.map((rolls)=>
                                    <span class="badge badge-info badge-getusers"> 
                                    {rolls}
                                    </span>)
                                )
                                } 
                            })()}
                            <button onClick={()=>{gotoEdit(element.id)}} class="btn-warning btn-edit">
                            <img src="../modify.png"></img>
                            </button> 
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Users_role;
if (document.getElementById('users')) {
    var data = document.getElementById('users').getAttribute('data')
    document.getElementById('users').removeAttribute('data')
    ReactDOM.render(<Users_role data={data}/>, document.getElementById('users'));
}
