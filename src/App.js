import { BrowserRouter as Router, Route } from 'react-router-dom';
// import classes from './App.module.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'


function App() {
  return(
    <Router>
      <Header />
      <Balance />
      <AddTransaction />
      <IncomeList />
      <ExpenseList />
    </Router>
  )
}

export default App;
