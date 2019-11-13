import React, {Component, ReactPropTypes} from 'react';
import { Input, Button } from '@material-ui/core'

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

    }
    handleAuthUser(){
        const {username, password} = this.state;
        if(username === 'admin' && password === 'admin'){
            alert("Login successful");
            this.props.history.push('/dashboard');
            this.setState({loggedIn:true});
            this.props.checkAuthStatus(true)
            // this.props.checkAuthStatus(true);
        }
        else {
            alert("Username/Password Invalid")
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
            </form>
        </div>)
    }
}

export default LoginComponent;