import React, { Component } from 'react';
// import './App.css';
import './SignIn'
import SignIn from './SignIn'
import SignUp from "./SignUp";

class App extends Component {
    constructor(props) {
        super(props);

        this.switch = this.switch.bind(this);
        this.state = {
            inOrUp: false
        };
    }


    switch(){
        this.setState({inOrUp: !this.state.inOrUp});
        console.log(JSON.stringify(this.state.inOrUp));
    }

    render(){
         return (
            <div>
                {this.state.inOrUp &&
                <div>
                    <button onClick={this.switch}>Go to sign up</button>
                    <SignIn/>
                </div>}
                {!this.state.inOrUp &&
                <div>
                    <button onClick={this.switch}>Go to sign in</button>
                    <SignUp/>
                </div>}
            </div>
        )
    }


}

export default App;
