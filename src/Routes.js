import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './components/auth/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "./Layout/Admin";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/auth/login" exact component={Login}/>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                {/* <Route path="/admin" */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;