import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute'
import MyProfile from './containers/MyProfile'
import FarmContainer from './containers/FarmContainer';
import classes from './App.module.css';
import Balance from './components/Balance'
import AddIncomeTransaction from './components/AddIncomeTransaction'
import AddExpenseTransaction from './components/AddExpenseTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'


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
          <Route exact path='/' component={Home} history={history} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
