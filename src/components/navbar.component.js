import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HomeComponent from "./home.component";
import LoginComponent from "./login.component";

class NavComponent extends Component {
    render() {
        return(
            <div>
                <h1> Nav Component</h1>
            </div>
        )
    }
}


export default NavComponent;
