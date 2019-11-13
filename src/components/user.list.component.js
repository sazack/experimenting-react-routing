import React, {Component} from 'react';
import {Button, Input} from '@material-ui/core';

class UserListComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            username:'',
            password:'',
            users: []
        };

        this.handleAddUser = this.handleAddUser.bind(this);


    }
    handleAddUser(){
        const {fullname, username, password} = this.state;
        const {users} = this.state;
        users.push([fullname,username,password]);

        console.log(users);
    }

    render() {
        const {fullname,username, password } = this.state;

        return(<div>
            <form>
                <Input
                    name="fullname"
                    value={fullname}
                    onChange={this.handleInputChange}
                    aria-describedby="fullname"
                    placeholder="fullname"
                />
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
                <Button color="primary" onClick={this.handleAddUser}> Submit </Button>
            </form>
        </div>)
    }
}