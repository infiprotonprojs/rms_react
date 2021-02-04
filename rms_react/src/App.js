import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/invoices' component={Invoices}></Route>
        <Route path='/payments' component={Payments}></Route>
        <Route path='/properties' component={Properties}></Route>
        <Route path='/tenants' component={Tenants}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
