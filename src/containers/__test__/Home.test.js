import React from 'react'
import { mount } from 'enzyme'
import Home, { items,newItem } from '../Home'

import ViewTab from '../../components/ViewTable';
import TotalPrice from '../../components/TotalPrice';
import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearYearAndMonth, padLeft} from '../../utility';
import MonthPicker from '../../components/MonthPicker'
import CreateBtn from '../../components/CreateBtn'
import PriceList from '../../components/PriceList';

let wrapper
describe('test Home container component', () => {
    beforeEach(() => {
        wrapper = mount(<Home/>)
    })
    it('should render the default layout', () => {
        const curretDate = parseToYearYearAndMonth('2018/10/01')
        expect(wrapper.find(PriceList).length).toEqual(1)
        expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)
        expect(wrapper.find(MonthPicker).props().year).toEqual(curretDate.year)
        expect(wrapper.find(MonthPicker).props().month).toEqual(curretDate.month)
        expect(wrapper.find(PriceList).props().items.length).toEqual(1)
    })
    it('click the another view Tab', () => {
        wrapper.find('.nav-item a').last().simulate('click')
        expect(wrapper.find(PriceList).length).toEqual(0)
        expect(wrapper.find('.chart-title').length).toEqual(1)
        expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)
    })
    it('click the new month item', () => {
        wrapper.find('.dropdown-toggle').simulate('click')
        wrapper.find('.months-range .dropdown-item').at(8).simulate('click')
        expect(wrapper.find(MonthPicker).props().month).toEqual(9)
        expect(wrapper.find(PriceList).props().items.length).toEqual(2)
    })
    it('click the click button',() => {
        wrapper.find(CreateBtn).simulate('click')
        expect(wrapper.find(PriceList).props().items.length).toEqual(2)
        expect(wrapper.state('items')[0]).toEqual(newItem)
    })
})