import React from "react";
import ReactRouterDOM from "react-dom";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        let login = "";
        let check_login = this.validateLogin(login);
        let password = "";
        let check_password = this.validatePassword(password);
        let password1 = "";
        let equal_password = this.comparePassword(password1, password);
        let email = "";
        let check_email = this.validateEmail(email);
        let valid_signup = this.validateSignup(check_login, check_email, check_password, equal_password);

        this.state = {
            login: login,
            email: email,
            password: password,
            password1: password1,
            valid_signup: valid_signup,
            check_login: check_login,
            check_password: check_password,
            equal_password: equal_password,
            check_email: check_email
        };

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPassword1Change = this.onPassword1Change.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateLogin(login){
        return true;
    }

    validatePassword(password){
        return true;
    }

    comparePassword(password1, password){
        return true;
    }

    validateEmail(email){
        return true;
    }

    validateSignup(check_login, check_password, check_email, equal_password){
        return check_login === true && check_password === true && check_email === true && equal_password === true;
    }

    onLoginChange(e){
        let val = e.target.value;
        let valid = this.validateLogin(val);
        this.setState({login: val, check_login: valid});
    }

    onEmailChange(e){
        let val = e.target.value;
        let valid = this.validateEmail(val);
        this.setState({email: val, check_email: valid});
    }

    onPasswordChange(e){
        let val = e.target.value;
        let valid = this.validatePassword(val);
        this.setState({password: val, check_password: valid});
    }

    onPassword1Change(e){
        let val = e.target.value;
        let valid = this.comparePassword(val);
        this.setState({password1: val, equal_password: valid});
    }

    handleSubmit(e){
        e.preventDefault();
        let valid = this.validateSignup(this.state.check_login, this.state.check_password, this.state.check_email, this.state.equal_password);
        this.setState({valid_signup: valid});
/*        if (this.state.valid_signup){
            alert("OK");
        }
        else{
            alert("Ne OK");
        }
*/
        //для отправки через POST
        fetch('http://localhost:9000/user',{
            method: 'POST',
            headers: {
                //Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                username: this.state.login,
                password: this.state.password,
                email: this.state.email
            }),
        });
    }

    render(){
        return(
            <form name="signUp" method="post" onSubmit={this.handleSubmit}>
                <p>login<br/>
                    <input type="text" onChange={this.onLoginChange} value={this.state.login}/>
                </p>
                <p>e-mail<br/>
                    <input type="text" onChange={this.onEmailChange} value={this.state.email}/>
                </p>
                <p>password<br/>
                    <input type="text" onChange={this.onPasswordChange} value={this.state.password}/>
                </p>
                <p>password again<br/>
                    <input type="text" onChange={this.onPassword1Change} value={this.state.password1}/>
                </p>
                <p><input type="submit" value="Sign up" /></p>
            </form>
        )
    }
}

export default SignUp;