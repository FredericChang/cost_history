import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './containers/Home'
import CategorySelect from './components/CategorySelect'
import './App.css';
import Create from './containers/Create'



function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/create/10">Create</Link>
        </ul>
        <div className="container pb-5">
          <Route path="/" exact component={Home} />
          <Route path="/create"  component={Create} />
          <Route path="/edit/:id"  component={Create} />
          <Route path="/category" component={CategorySelect}/>
          {/* <Home />   */}
        </div>
      </div>
    </Router>
  );
}

export default App;
