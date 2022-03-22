import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Add from './Components/Users/Add';
import Edit from './Components/Users/Edit';
import View from './Components/Users/View';



function App() {
  return (
    <>
    <Router>
      <Header />
      <div className='container__section'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/add" component={Add} />
        <Route exact path="/users/edit/:id" component={Edit} />
        <Route exact path="/users/view/:id" component={View} />
      </Switch>
      </div>
      <Footer />
    </Router>
  </>
  );
}

export default App;
