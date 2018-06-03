import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './components/SignIn';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

class StartPage extends React.Component {
    constructor(props) {
        super(props);

        let inOrUp = true;

        this.state = {
            inOrUp: inOrUp
        };
    }

    switchToUp(){
        this.setState({inOrUp: true});
    }

    switchToIn(){
        this.setState({inOrUp: false});
    }

    render(){
        return (
            {inOrUp &&
                <div>
                    <button onClick={this.switchToIn}>Sign In</button>
                    <SignIn/>
                </div>})

        return (
            {this.state.inOrUp &&
            <div>
                <button onClick={this.switchToIn}>Sign In</button>
                <SignIn/>
            </div>})
        <button onClick={this.switchToUp}>Sign Up</button>;
        if (this.state.inOrUp){
            return(
                <div>
                </div>
            );
        }
        else {
            return(
                <div>
                    <SignUp/>
                </div>
            );
        }
    }


}
ReactDOM.render(
    <div>
        <StartPage/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();