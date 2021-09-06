import { BrowserRouter as Router, Route } from 'react-router-dom';
// import classes from './App.module.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'


function App() {
  return(
    <Router>
      <Header />
      <Balance />
      <AddTransaction />
    </Router>
  )
}

export default App;
