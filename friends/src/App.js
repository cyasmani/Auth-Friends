import React from 'react';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path='/protected' component={FriendsList}/>
          <Route component={Login}/>
        </Switch>
        
      
      </div>
    </Router>
  );
}

export default App;
