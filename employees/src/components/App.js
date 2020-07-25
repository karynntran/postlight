import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import EmployeesList from './EmployeesList';
import EmployeeShow from './EmployeeShow';

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <div>
                <Switch>
                    <Route path="/" exact component={EmployeesList} />
                    <Route path="/employees/:id" exact component={EmployeeShow} />
                </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

