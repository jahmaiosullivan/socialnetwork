import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Vote from 'containers/Vote';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';
import Timeline from 'containers/Timeline';
import Landing from 'containers/Landing';
import Main from 'containers/Main';
import App from 'containers/App';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
    const requireAuth = (nextState, replace, callback) => {
        const { user: { authenticated }} = store.getState();
        if (!authenticated) {
            replace({
                pathname: '/app/login',
                state: {nextPathname: nextState.location.pathname}
            });
        }
        callback();
    };

    const redirectAuth = (nextState, replace, callback) => {
        const { user: { authenticated }} = store.getState();
        if (authenticated) {
            replace({
                pathname: '/'
            });
        }
        callback();
    };
    return (
        <Route path="/" component={Main}>
            <IndexRoute component={Landing}/>
            <Route path="app" component={App}>
                <Route path="login" component={LoginOrRegister} onEnter={redirectAuth}/>
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth}/>
                <Route path="vote" component={Vote} onEnter={requireAuth}/>
                <Route path="about" component={About}/>
            </Route>
        </Route >
    );
};
