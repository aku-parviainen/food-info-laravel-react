import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Views
import Front from './containers/Front'

const createRoutes = () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={Front}/>
            <Route path='*' component={Front} />
        </Switch>
    </BrowserRouter>
);

export default createRoutes;