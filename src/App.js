import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PriceList  from './components/PriceList';
import ViewTab from './components/ViewTable';
import TotalPrice from './components/TotalPrice';
import {LIST_VIEW, CHART_VIEW, A, B} from './utility';
import MonthPicker from './components/MonthPicker'


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
      "type":"outcome",
      "iconName":"ios-plane"
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
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
]

function App() {
  return (
    <div className="App">

        {/* <PriceList
          items={items}
          onModifyItem={(item)=> {alert(item.id)}}
          onDeleteItem={(item)=> {alert(item.id)}}
          /> */}
        <ViewTab
          activeTab={CHART_VIEW}
          onTabChange={(view) => {console.log(view)}}
        />
        <TotalPrice
          income={A}
          outcome={B}
        />
        <MonthPicker
          year = {2018}
          month = {7}
        />

    </div>
  );
}

export default App;
