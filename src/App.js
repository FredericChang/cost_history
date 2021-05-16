import React, { Component, component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './containers/Home'
import CategorySelect from './components/CategorySelect'
import './App.css';
import Create from './containers/Create'
import { testItems, testCategories} from './testData'
import {flatternArr} from '../src/utility'

// console.log(flatternArr(testItems))
export const AppContext = React.createContext()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: flatternArr(testItems),
      categories: flatternArr(testCategories)
    }
    this.actions = {
      deleteItem: (item) => {
          delete this.state.items[item.id]
          this.setState({
              items: this.state.items
          })
      }
    }
  }
  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        actions: this.actions,
        // added state first. later we could use consumer functiont to pass value to component.
        // added action second, because we want delete some item, it will be eaiser to
      }}>
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
    `      </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;

// create constructor as context.componment
