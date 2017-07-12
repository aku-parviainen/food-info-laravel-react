import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Views
import FrontContainer from './containers/FrontContainer'
import FoodContainer from './containers/FoodContainer'
import NotFoundContainer from './containers/NotFoundContainer'

const createRoutes = () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={FrontContainer}/>
            <Route exact path="/foods/:foodId" component={FoodContainer}/>
            <Route path='*' component={NotFoundContainer} />
        </Switch>
    </BrowserRouter>
);

export default createRoutes;