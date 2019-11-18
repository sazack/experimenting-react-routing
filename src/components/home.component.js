import React, {Component} from 'react'
import NavComponent from "./navbar.component";
import LoginComponent from "./login.component";

class HomeComponent extends Component {
    render() {
        console.log("---------------------->"+ "I am in home component");
        return <div>
         
            <h1>This is Home component </h1>
        </div>
    }
}

export default HomeComponent