import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main';
import Register from './Register';
import Request from './Request';
import Manage from './Manage';

// import './App.css';

function App() {
  return (
    <React.Fragment>
    

     <BrowserRouter>
     <Route exact path = "/" component ={Home}/>
            
            <Switch>
            <Route exact path = "/main" component ={Main}/>
                <Route exact path = "/register" component ={Register}/>
                <Route exact path = "/request" component ={Request}/>
                <Route exact path = "/manage" component ={Manage}/>
                </Switch>
     
     </BrowserRouter>
     </React.Fragment>
  );
}

export default App;
