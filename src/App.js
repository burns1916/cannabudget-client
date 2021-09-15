import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
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
          <Route exact path='/' component={Home} history={history} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
