import React, { Component } from 'react';
import {TextField, Button} from "@material-ui/core";
import Axios from 'axios';
class DashboardComponent extends Component{

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
        const {userName} = this.props.location.state;
        // user= 'John Doe';
        const newPost = {"user":user,"post":post};
        collection.push(newPost);
        this.setState({collection:collection});
        try{
            const postobj = {user:userName, post:post, likes:0, dislikes:0};
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

        // console.log(this.state.collection);
    // const postLists = this.state.collection.map((post) => <Person name={ person.name } />);
    render(){
        const {post, collection, postsavailable} = this.state;
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
                {postsavailable.map((data)=>{
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
export default DashboardComponent

