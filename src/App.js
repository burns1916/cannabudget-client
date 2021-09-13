import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AddIncomeTransaction from './components/AddIncomeTransaction'
import AddExpenseTransaction from './components/AddExpenseTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'


function App() {

  return(
    <Router>
      <Header />
      {/* <Balance /> */}
      {/* <AddIncomeTransaction /> */}
      {/* <AddExpenseTransaction /> */}
      {/* <IncomeList /> */}
      {/* <ExpenseList /> */}
    </Router>
  )
}

export default App;
