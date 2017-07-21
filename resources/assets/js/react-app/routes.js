import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Views
import FrontView from './views/FrontView'
import FoodView from './views/FoodView'
import NotFoundView from './views/NotFoundView'

const createRoutes = () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={FrontView}/>
            <Route exact path="/foods/:foodId" component={FoodView}/>
            <Route path='*' component={NotFoundView}/>
        </Switch>
    </BrowserRouter>
);

export default createRoutes;