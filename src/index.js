import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './components/SignIn';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div>
        {title},
        <SignIn />
    </div>,
    document.getElementById('app')
);

module.hot.accept();