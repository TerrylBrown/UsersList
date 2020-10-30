import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from '../UserList/UserList';
import UserInfo from '../UserInfo/UserInfo';

const Users = () => {
    return (
    <div className="container">
        <Router>
            <Switch>
                <Route path='/user/:userId'>
                    <UserInfo />
                </Route>
                <Route path='/'>
                    <UserList />
                </Route>
            </Switch>        
        </Router>        
    </div>
    );
}

export default Users;
