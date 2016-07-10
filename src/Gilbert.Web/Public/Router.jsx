import React from 'react'; 
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import About from './components/About';

export default <Router history={hashHistory}>
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
</Router>;
