import React, { Component } from 'react';
import {TextField, Button} from "@material-ui/core";
import Axios from 'axios';

class ProfileComponent extends Component{
  
    constructor(props){
        super(props);
        this.state ={
            post: '',
            user: '',
            collection:[],
            postsavailable: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({user:"John Doe"})
    }


    async handleAddPost(){
        const {user, post, collection} = this.state;
        const {username} = this.props;
        // user= 'John Doe';
        const newPost = {"user":username,"post":post};
        collection.push(newPost);
        this.setState({collection:collection});
        try{
            const postobj = {user:username, post:post, likes:0, dislikes:0};
            console.log(postobj)
            await Axios.post('/api/pos', postobj)
        }

        catch(error){
            console.log(error.message);
        }
        await this.loadUsers()
    
    }

    async componentDidMount(){
        await this.loadUsers()
    };

    async loadUsers(){
        try{
            const response = await Axios.get('/api/load');
            const {data} = response;
            this.setState({postsavailable: data});
        }
        catch(error){
            console.log(error.message);
        }
    }



    
    render(){
        const {username} = this.props;
        console.log("I am in profile component and username is: "+ username)
        const {post, collection, postsavailable} = this.state;
        let required = postsavailable.filter((post) => post.user == username);
        return(
            <div>
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
        
        {required.map((data)=>{
            return <div>
                <b> {data.user}</b>
                <p>{data.post}</p>
                <Button>Like </Button>
                <Button> Dislike </Button>
            </div>
        })}
    </div>
)
    }
}

export default ProfileComponent

