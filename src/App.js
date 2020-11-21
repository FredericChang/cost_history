import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PriceList  from './components/PriceList';
import './App.css';

const items = [
  {
    "id":1,
    "title": "germany",
    "price": 200,
    "date": "2018-09-10",
    "category" : {
      "id":"1",
      "name":"travel",
      "type":"outcome"
    }
  },
  {
    "id":2,
    "title": "germany",
    "price": 200,
    "date": "2018-09-10",
    "category" : {
      "id":"1",
      "name":"travel",
      "type":"outcome"
    }
  },
]

function App() {
  return (
    <div className="App">

        <PriceList
          items={items}
          onModifyItem={(item)=> {alert(item.id)}}
          onDeleteItem={(item)=> {alert(item.id)}}
          />

    </div>
  );
}

export default App;
