import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/home.component'
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LoginComponent from "./components/login.component";
import DashboardComponent from "./components/dashboard.component";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import  {withRouter} from 'react-router-dom';
import ProfileComponent from "./components/profile.component";
import middlecomponent from "./middlecomponent"
import RegisterComponent from "./components/Register.component";

class Application extends Component{

  constructor(props){

    super(props);

    console.log("---->>>>>",this.props);

    this.checkAuthStatus = this.checkAuthStatus.bind(this);
    this.state ={
      loggedIn :false
    }

  }

  checkAuthStatus(val){
    this.setState({loggedIn:true});
  }


  render(){

    const {loggedIn} = this.state;
    if(loggedIn){
     return <div>
       <Router>
         <div>
           <AppBar position="static">
             <Toolbar>
               <IconButton edge="start" color="inherit" aria-label="menu">
                 <MenuIcon />
               </IconButton>
               <Typography variant="h6">
                 <span> <Link to={'/profile'}> BookFace</Link> </span>
               </Typography>
               <Button color="inherit"><Link to={'/profile'}> Profile </Link></Button>
               <Button color="inherit"><Link to={'/loggg'} >
                  Log Out
                </Link>
                </Button>
             </Toolbar>
           </AppBar>
           <Switch>
             <Route exact path={"/"} component={DashboardComponent}/>
             {/*<Route exact path={"/login"} component={LoginComponent}/>*/}
             <Route exact path={"/profile"} component={ProfileComponent}/>
             <Route exact path={"/dashboard"} component={DashboardComponent}/>
             <Route exact path={"/loggg"} render={props=>(<LoginComponent {...props} checkAuthStatus = {this.checkAuthStatus}/>)}/>
           </Switch>
         </div>
       </Router>
     </div>
    }
    else{
      console.log("-------------------------------->" + "I am in else case");
      return <div>
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  <span> <Link to={'/'}> BookFace </Link> </span>
                </Typography>
                <Button color="inherit"><Link to={'/login'}> Login </Link></Button>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path={"/login"} component={HomeComponent}/>
              {/*<Route exact path={"/login"} component={LoginComponent}/>*/}
              <Route exact path={"/"} render={props=>(<LoginComponent {...props} checkAuthStatus = {this.checkAuthStatus}/>)}/>
              <Route exact path={"/dashboard"} component={DashboardComponent}/>
              <Route exact path= {"/Register"} component={RegisterComponent}/>
            </Switch>
          </div>
        </Router>
      </div>
    }

  }
}

export default Application;
