import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'


class App extends Component {
  state = {
    incomeTransactions: [
      {id: 1, incomeText: "Cat Sold", incomeAmount: 500},
      {id: 2, incomeText: "Hat Sold", incomeAmount: 50},
      {id: 3, incomeText: "Bat Sold", incomeAmount: 5}
    ],
    expenseTransactions: [
      {id: 4, expenseText: "Rent", expenseAmount: 1000}
    ],
  }

  render() {
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
}

export default App;
