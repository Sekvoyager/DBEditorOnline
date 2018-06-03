import React from 'react';
import ReactRouterDOM from 'react-dom';

const address = "localhost:9000";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        let login = "";
        let password = "";

        this.state = {
            login: login,
            password: password
        };

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onLoginChange(e){
        let val = e.target.value;
        this.setState({login: val});
    }

    onPasswordChange(e){
        let val = e.target.value;
        this.setState({password: val});
    }

    handleSubmit(e){
        //перед этим устанавливаем куки
        e.preventDefault();
        fetch('http://localhost:9000/user',{
            method: 'GET'
        });
    }

    render(){
        return(
            <form name="signIn" method="post" onSubmit={this.handleSubmit}>
                <p>login<br/>
                    <input type="text" onChange={this.onLoginChange} value={this.state.login}/>
                </p>
                <p>password<br/>
                    <input type="text" onChange={this.onPasswordChange} value={this.state.password}/>
                </p>
                <p><input type="submit" value="Sign in" onSubmit={this.handleSubmit}/></p>
            </form>
        )
    }
}

export default SignIn;
//ReactDOM.render(<Content />, document.getElementById('app'));