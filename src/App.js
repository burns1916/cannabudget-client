import { BrowserRouter as Router, Route } from 'react-router-dom';
// import classes from './App.module.css';
import Header from './components/Header'


function App() {
  return(
    <Router>
      <Route path="/" component={Header} />
    </Router>
  )
}

export default App;
