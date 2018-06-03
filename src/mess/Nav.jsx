import React from "react";
import ReactRouterDOM from "react-dom";

// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Switch = ReactRouterDOM.Switch;
const NavLink = ReactRouterDOM.NavLink;

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <NavLink to="/">Sign in </NavLink>
                <NavLink to="/signup">Sign up </NavLink>
            </nav>
        )
    }
}

export default Nav;