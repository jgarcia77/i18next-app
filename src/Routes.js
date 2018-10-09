import React from "react";
import {Route, Switch, Link, withRouter} from "react-router-dom";
import Home from './pages/main/Home';
import BasicExample from './pages/main/BasicExample';
import ExtendedExample from './pages/main/ExtendedExample';

const Routes = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/basicexample">Basic Example</Link>
            &nbsp;|&nbsp;
            <Link to="/extendedexample">Extended Example</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/basicexample" component={BasicExample} />
                <Route path="/extendedexample" component={ExtendedExample} />
            </Switch>
        </div>
    )
}

export default withRouter(Routes);