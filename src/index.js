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

        this.switchToIn = this.switchToIn.bind(this);
        this.switchToUp = this.switchToUp.bind(this);
    }

    switchToUp(){
        this.setState({inOrUp: true});
    }

    switchToIn(){
        this.setState({inOrUp: false});
    }

    render(){
       if (this.state.inOrUp){
           return(
                <div>
                    <button onClick={this.switchToUp}>Sign Up</button>
                    <SignUp/>
                </div>
           )}
       else {
           return(
               <div>
                   <button onClick={this.switchToIn}>Sign In</button>
                   <SignIn/>
               </div>
       )}
    }
}

ReactDOM.render(
    <div>
        <StartPage/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();