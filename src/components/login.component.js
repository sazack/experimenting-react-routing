import React, {Component, ReactPropTypes} from 'react';
import { Input, Button } from '@material-ui/core'
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
class LoginComponent extends Component{
    constructor(props){

        super(props);


        this.state = {
            username: '',
            password: '',
            loggedIn: false
        };
        this.handleAuthUser = this.handleAuthUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkAuthStatus = this.checkAuthStatus.bind(this);
        this.getuser = this.getuser.bind(this);

    }
    async handleAuthUser(){
        const {username, password} = this.state;
        let response
        const data = {
            username: username,
            password: password
        }
        try{
         response = await Axios.post('/api/auth', data);
         if(response.status === 200){
            alert("Login successful");
            this.props.history.push('/dashboard', {userName: username});
            this.setState({loggedIn:true});
            this.props.checkAuthStatus(true)
            this.props.getuser(username)
            // this.props.checkAuthStatus(true);
        }
        else if(response.status === 400) {
            alert("Username/Password Invalid")
        }
        }
        catch(error){
            alert("Username/Password Invalid");
        }
        
        
        
        
        // console.log(username,password);
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    checkAuthStatus(){
        console.log(this.state.loggedIn)
        return this.state.loggedIn;
    }

    getuser(){
        console.log(this.state.username);
        return this.state.username;
    }

    render() {
        const {username, password } = this.state;

        return(<div>
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
                <Button color="primary" onClick={this.handleAuthUser}> Submit </Button>
                <Button color="primary" onClick={()=> {
                    console.log("I am in register click button");
                    this.props.history.push('/Register');
                    }}> Register </Button>
            </form>
        </div>)
    }
}

export default withRouter(LoginComponent);