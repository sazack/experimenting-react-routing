import React, { Component } from 'react';
import {TextField, Button} from "@material-ui/core";

class DashboardComponent extends Component{

    constructor(props){

        super(props);

        this.state ={
            post: '',
            user: '',
            collection:[]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);

    }
    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({user:"John Doe"})

    }

    handleAddPost(){
        const {user, post, collection} = this.state;
        // user= 'John Doe';
        const newPost = {"user":user,"post":post};
        collection.push(newPost);
        this.setState({collection:collection});
        // console.log(this.state.collection);
    }
    // const postLists = this.state.collection.map((post) => <Person name={ person.name } />);
    render(){
        const {post, collection} = this.state;
        console.log("--->",collection);
        return(
            <div>
                <h1> Hello, I am your dash daddy</h1>
                <form>
                    <TextField label="What's on your mind"
                               style={{margin:8}}
                               fullWidth
                               name="post"
                               value={post}
                               onChange={this.handleInputChange}
                    />
                    <Button color={'primary'} onClick={this.handleAddPost}> Post </Button>
                </form>
                {collection.map((data)=>{
                    return <div>
                        <b> {data.user}</b>
                        <p>{data.post}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default DashboardComponent

