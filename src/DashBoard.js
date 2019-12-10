import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import Register from './Register';
import Header from './Header';
import SideBar from './Sidebar';
import Request from './Request';
import Manage from './Manage';

export default class DashBoard extends Component {
    render() {
        return (
            <div>
               
                <Header/>
                <SideBar/>
                <Switch>
                <Route exact path = "/register" component ={Register}/>
                <Route exact path = "/request" component ={Request}/>
                <Route exact path = "/manage" component ={Manage}/>
                </Switch>
                
            </div>
        )
    }
}
