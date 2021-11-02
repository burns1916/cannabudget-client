import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute';
import FarmContainer from './containers/FarmContainer';
import CropContainer from './containers/CropContainer';
import TransactionContainer from './containers/TransactionContainer';
import classes from './App.module.css'


function App() {
  const history = useHistory();
  return(
    <div className={classes.App}>
      <Header />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} history={history} />
          <Route exact path='/login' component={Login} history={history} />
          <Route exact path='/signup' component={Signup} history={history} />
          <PrivateRoute exact path='/farms' component={FarmContainer} history={history} />
          <PrivateRoute exact path='/farms/:id/crops' component={CropContainer} history={history} />
          <PrivateRoute exact path='/farms/:id/crops/:id' component={TransactionContainer} history={history} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
