import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home/';
import Defects from './components/Defects';

export default <Router history={hashHistory}>
    <Router history={hashHistory}>
        <Route component={Layout}>
            <Route path="/" component={Home} />
            <Route path="/defects" component={Defects} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
</Router>;
