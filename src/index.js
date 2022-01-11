import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Test from './comp3.js';
import Dashboard from './4pages/dashboard.js';
import Register from './4pages/register.js';
import Login from './4pages/login.js';

// <Route exact path='/' component={() => <Name name='Test' />}/>

const App = () => {
    return (<Router>
        <Switch>
            <Route exact path='/ecloud' component={Test} />
            <Route exact path='/ecloud/dashboard' component={() => <Dashboard/>} />
            <Route exact path='/ecloud/register' component={() => <Register/>} />
            <Route exact path='/ecloud/login' component={() => <Login/>} />
        </Switch>
    </Router>);
};

ReactDOM.render(<App />,document.getElementById('app'));