import React, { Component } from 'react';
import CategorySelect, { categories } from '../components/CategorySelect'
import {Tabs, Tab} from '../components/Tabs'
import { withRouter } from 'react-router-dom'
import PriceForm from '../components/PriceForm'
import { testCategories } from '../testData'
import {TYPE_INCOME, TYPE_OUTCOME} from '../utility';
import { AppContext } from '../App'
import withContext from '../withContext'


const tabsText = [TYPE_OUTCOME, TYPE_INCOME]
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: TYPE_OUTCOME,
            SelectCategory: null,
        }
    }
    tabChange = (index) => {
        this.setState({
            selectedTab: tabsText[index]
        })
    }
    render() {
        const { data } = this.props
        const { items, categories } = data
        const { selectedTab } = this.state
        // const filterCategories = testCategories.filter(category => category.type === TYPE_INCOME)
        const filterCategories = Object.keys(categories).filter(id => categories[id].type === selectedTab).map(id => categories[id])


        return (                  
                <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
                    <Tabs activeIndex={0} onTabChange={this.tabChange}>
                        <Tab>INCOME</Tab>
                        <Tab>OUTCOME</Tab>    
                    </Tabs>
                    <CategorySelect categories = { filterCategories} onSelectCategory={ () => {}}/>
                    <PriceForm
                        onFormSubmit={() => {}}
                        onCancelSubmit={this.cancelSubmit}
                    
                    />
                </div>  
        
            
        )   
    }
}


export default withRouter(withContext(Create))