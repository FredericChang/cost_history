import React, { Component } from 'react';
import CategorySelect from '../components/CategorySelect'
import {Tabs, Tab} from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import { testCategories } from '../testData'
import {TYPE_INCOME, TYPE_OUTCOME} from '../utility';

class Create extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
                <Tabs activeIndex={0} onTabChange={() => {}}>
                    <Tab></Tab>
                    <Tab></Tab>    
                </Tabs>
                <CategorySelect >
            </div>
        )
    }
}


export default Create