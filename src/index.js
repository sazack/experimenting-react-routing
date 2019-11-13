import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const routing = (
//     <Router>
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6">
//                         <span> <Link to={'/'}> BookFace</Link> </span>
//                     </Typography>
//                     <Button color="inherit"><Link to={'/login'}> Login </Link></Button>
//                 </Toolbar>
//             </AppBar>
//             <Switch>
//                 <Route exact path={"/"} component={HomeComponent}/>
//                 <Route exact path={"/login"} component={LoginComponent}/>
//                 <Route exact path={"/dashboard"} component={DashboardComponent}/>
//             </Switch>
//         </div>
//     </Router>
// )

ReactDOM.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
