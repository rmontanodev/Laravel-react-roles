import React from 'react';
import ReactDOM from 'react-dom';

class Users_role_edit extends React.Component {
    constructor(props){
        super(props);
        var data = JSON.parse(this.props.data)
        let arr_toadd = []
        data.possible_roles.forEach((rol)=>{
            let rol_in_use = false
            if(data.sus_roles){
                data.sus_roles.forEach((rol_assignado)=>{
                    if(rol==rol_assignado){
                        rol_in_use = true;
                    }
                })
            }
            if(!rol_in_use){
                arr_toadd.push(rol);
            }
        })
        this.state = {
            user: data.user_info,
            roles:arr_toadd,
            token:this.props.token,
            susroles: data.sus_roles
        }
    }
    render(){
        function gotoList(){
            window.location.replace("/admin/getusers");
        }
        return (
            <div class="col-md-3 offset-md-4">
                <div class="card">
                    <h5 class="card-header">Editar roles para usuario {this.state.user.name} <img class="edit-back" onClick={()=>{gotoList()}} src="../../../back.png"></img></h5>
                    <div class="col-md-12">
                        <div class="roles-actuales add-role">
                            <h6> Roles actuales 
                            {(() => {
                                if(this.state.user.roles){
                                    return(
                                    this.state.user.roles.map((element) => 
                                        <span class="badge badge-info">{element} </span>
                                    )
                                    )
                                }
                            })()}
                            </h6>
                        </div>
                        <div class="add-role">
                            <form action="/admin/addrole" method="post">
                            <input type="hidden" name="_method" value="PUT"/>
                            <input type="hidden" name="id" value={this.state.user.id}/>
                            <input type="hidden" name="_token" value={this.state.token} />
                            <p>Añadir rol</p>
                            <select class="form-select" name="add-role">
                                {this.state.roles.map((element) => 
                                    <option value={element}>{element}</option>
                                )}
                            </select>
                            <input type="submit" value="Añadir Rol" class="btn-success add-role"/>
                            </form>
                        </div>
                        <div class="delete-role">
                            <form action="/admin/delrole" method="post">
                            <input type="hidden" name="_method" value="PUT"/>
                            <input type="hidden" name="id" value={this.state.user.id}/>
                            <input type="hidden" name="_token" value={this.state.token} />
                            <p>Eliminar rol</p>
                            <select class="form-select" name="del-role">
                            {(() => {
                                if(this.state.susroles){
                                    return(
                                        this.state.susroles.map((element) => 
                                        <option value={element}>{element}</option>
                                    )
                                    )
                                }
                            })()}
                            </select>
                            <input type="submit" class="btn-danger delete-role" value="Eliminar Rol"/>
                            </form>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}
// function Users() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>

//                         <div className="card-body">I'm an example component!</div>
//                         <UserRow/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Users_role_edit;
if (document.getElementById('edituser')) {
    var data = document.getElementById('edituser').getAttribute('data')
    var token = document.getElementById('edituser').getAttribute('token')
    document.getElementById('edituser').removeAttribute('data')
    document.getElementById('edituser').removeAttribute('token')
    ReactDOM.render(<Users_role_edit data={data} token={token}/>, document.getElementById('edituser'));
}
