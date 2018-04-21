import React from 'react';
import ReactDOM from 'react-dom';
import Content from './mess/app';
import SignIn from "./components/SignIn";

const title = 'My Minimal React Webpack Babel Setup';

require('es6-promise').polyfill();
ReactDOM.render(
    <div>
        <SignIn/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();