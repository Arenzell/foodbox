import React from 'react'
import { Switch } from 'react-router'
import FrontLayout from '../containers/FrontLayout'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import Authentication from '../pages/Authentication'
import Registration from '../pages/Registration'
import NotFound from '../pages/NotFound'

const Routes = () =>
    <Switch>
        <FrontLayout exact path='/' component={Welcome} />
        <FrontLayout exact path='/signin' component={Authentication} />
        <FrontLayout exact path='/signup' component={Registration} />
        <FrontLayout exact path='/home' component={Home} />
        <FrontLayout path="*" component={NotFound} />
    </Switch>

export default Routes
