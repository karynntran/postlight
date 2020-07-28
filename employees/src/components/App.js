import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import Main from './Main';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeDelete from './EmployeeDelete';

// import EmployeeShow from './EmployeeShow';

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <div>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/employees/new" exact component={EmployeeCreate} />
                    <Route path="/employees/:id/edit" exact component={EmployeeEdit} />
                    <Route path="/employees/:id/delete" exact component={EmployeeDelete} />

                </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

