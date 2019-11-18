import React from 'react'
import { Input, Button } from '@material-ui/core'
import {withRouter} from 'react-router-dom';
import LoginComponent from "./login.component"; 
import Axios from 'axios';

class RegisterComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                username: '',
                password: '',
                loggedIn: false
            };
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleRegisterClick = this.handleRegisterClick.bind(this);
            
        }
    
    
        handleInputChange(event){
            this.setState({
                [event.target.name]: event.target.value
            });
    
        }

        async handleRegisterClick(){
                console.log("I am in handleclick");
               const {username, password} = this.state;
               try{
                   const data = {username: username, password: password}
                   await Axios.post('/api/bfa', data);
               }
               catch(error){
                   console.log(error.message);
               }
        }

        render() {

            console.log("------------------------------------>I am in register component");
            const {username, password } = this.state;
    
            return(<div>
                <h1> ------------- I am in Register page ----------- </h1>
                <form>
                    <Input
                        name="username"
                        value={username}
                        onChange={this.handleInputChange}
                        aria-describedby="Username"
                        placeholder="Username"
                    />
                    <Input
                        name="password"
                        type= "password"
                        value={password}
                        onChange={this.handleInputChange}
                        aria-describedby="Password"
                        placeholder="Password"
                    />
                    <Button color="primary" onClick= {this.handleRegisterClick}
                    > Register </Button>
                </form>
            </div>)
        }
    }
    
    export default withRouter(RegisterComponent);