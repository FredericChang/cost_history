import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PriceList  from '../components/PriceList';
import ViewTab from '../components/ViewTable';
import TotalPrice from '../components/TotalPrice';
import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearYearAndMonth, padLeft} from '../utility';
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import PriceForm from '../components/PriceForm'
import {Tabs, Tab} from '../components/Tabs'
import Ionicon from 'react-ionicons'
import { AppContext } from '../App'
import withContext from '../withContext'


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
      "title": "asd",
      "price": 200,
      "date": "2018-09-10",
      "cid" : 1
    },
    {
      "id":2,
      "title": "asdasd",
      "price": 200,
      "date": "2018-09-10",
      "cid" : 2
    },
    {
        "id":3,
        "title": "germasdany",
        "price": 200,
        "date": "2018-10-10",
        "cid" : 1
      }
]
const newItem = {
    "id":1,
    "title": "germany",
    "price": 400,
    "date": "2018-10-10",
    "cid" : 1
}
 const tabsText = [LIST_VIEW, CHART_VIEW]
  class Home1 extends Component {
      constructor(props) {
          super(props)
          this.state = {
              items,
              currentDate : parseToYearYearAndMonth('2018/10/01'),
              tabView: tabsText[0],
          }
      }
      // view is from ViewTable
      changeView = (index) => {
          this.setState({
              tabView: tabsText[index],
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
            const {date} = this.props
            console.log(date)
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
                                <Tabs activeIndex={0} onTabChange={this.changeView}>
                                    <Tab>
                                    <Ionicon
                                        className="rounded-circle mr-2"
                                        fontSize="25px"
                                        sytle={{ backgroundColor: '#007bff', padding: '5px'}}
                                        color={'#007bff'}
                                        icon='ios-paper'
                                    />
                                    LIST MODE
                                    </Tab>
                                    <Tab>
                                    <Ionicon
                                        className="rounded-circle mr-2"
                                        fontSize="25px"
                                        sytle={{ backgroundColor: '#007bff', padding: '5px'}}
                                        color={'#007bff'}
                                        icon='ios-pie'
                                    />
                                        GRAPH MODE</Tab>
                                </Tabs>
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
                                    <h1 className="chart-title">  Chart Here </h1>
                                }
                            </div>
                        </React.Fragment>
            )
        }
  }

  export default withContext(Home1)
