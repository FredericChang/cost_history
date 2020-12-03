import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PriceList  from '../components/PriceList';
import ViewTab from '../components/ViewTable';
import TotalPrice from '../components/TotalPrice';
import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearYearAndMonth, padLeft} from '../utility';
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

const categories = {
    "1" : {
        "id":"1",
        "name":"travel",
        "type":"outcome",
        "iconName":"ios-plane"
    },
    "2" : {
        "id":"2",
        "name":"money",
        "type":"outcoincomeme",
        "iconName":"ios-plane"
      }
    }
const items = [
    {
      "id":1,
      "title": "germany",
      "price": 200,
      "date": "2018-09-10",
      "cid" : 1
    },
    {
      "id":2,
      "title": "germany",
      "price": 200,
      "date": "2018-09-10",
      "cid" : 2
    }
]
const newItem = {
    "id":3,
    "title": "germany",
    "price": 400,
    "date": "2020-09-10",
    "cid" : 1
}

  class Home extends Component {
      constructor(props) {
          super(props)
          this.state = {
              items,
              currentDate : parseToYearYearAndMonth(),
              tabView: LIST_VIEW,
          }
      }
      // view is from ViewTable
      changeView = (view) => {
          this.setState({
              tabView: view,
          })
      }
      changeDate = (year, month) => { 
          this.setState({
              currentDate: { year, month }
          })

      }
      modifyItem = (modifiedItem) => {
          const modifiedItems = this.state.items.map(item => {
              if ( item.id === modifiedItem.id ) {
                  return { ...item, title: 'Updated Title'}
                  //using title to for expanding effect. object assigned 
              } else {
                  return item
              }
          })
          this.setState({
              items: modifiedItems
          })
      }
      createItem = () => {
        this.setState({ 
            items: [newItem, ...this.state.items]
        })
        //via ... you could add new item into items
      }
      deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id)
        this.setState({
            items: filteredItems
        })
    }
        render() {
            const { items, currentDate, tabView } = this.state
            const itemsWithCategory = items.map(item => {
                item.category = categories[item.cid]
                return item
            }).filter(item => {
                return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
            })
            let totalIncome = 0, totalOutCome = 0
            itemsWithCategory.forEach(item => {
                if(item.category.type === TYPE_OUTCOME) {
                    totalOutCome += item.price
                } else {
                    totalIncome += item.price
                }
                // we didn't use state, because we could calculate.
            })
            return (
                <React.Fragment>
                    <header className="App-hedaer">
                        <div className="row mb-5">

                        </div>
                        <div className="row">
                            <div className="col">
                                <MonthPicker
                                    year={currentDate.year}
                                    month={currentDate.month}
                                    onChange={this.changeDate}
                                />
                            </div>
                            <div className="col">
                                <TotalPrice
                                    income={totalIncome}
                                    outcome={totalOutCome}
                                />
                            </div>
                        </div>
                    </header>
                    <div className="content-area py-3 px-3"> 
                        <ViewTab activeTab={tabView} onTabChange={this.changeView}/>
                        <CreateBtn onClick={this.createItem} />
                        { tabView === LIST_VIEW &&
                        <PriceList
                            items={itemsWithCategory}
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        /> 
                        }
                        { tabView === CHART_VIEW &&
                        <h1> hhhh </h1>
                        }
                    </div>
                </React.Fragment>
            )
        }
  }

  export default Home
