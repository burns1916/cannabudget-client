import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute'
import MyProfile from './containers/MyProfile'
import FarmContainer from './containers/FarmContainer';
import FarmPage from './components/FarmPage';


function App() {
  const history = useHistory();
  return(
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/login' component={Login} history={history} />
          <Route exact path='/signup' component={Signup} history={history} />
          <PrivateRoute exact path='/myprofile' component={MyProfile} history={history} />
          <PrivateRoute exact path='/farms' component={FarmContainer} history={history} />
          <PrivateRoute exact path='/farms/:id' component={FarmPage} history={history}/>
          <Route exact path='/' component={Home} history={history} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
