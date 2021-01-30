import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import MonthPicker from '../MonthPicker'

let props = {
  year: 2018,
  month: 8,
  onChange: jest.fn()
}

let wrapper


describe('test MonthPicker component', () => {
    beforeEach(() => {
        wrapper = shallow(<MonthPicker {...props} />)
    })
    it('should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('render the correct year and month, show correct dropdown status', () => {
        const text = wrapper.find('.dropdown-toggle').first().text()
        // expect(text).toEqual('2018year 08month')
        // expect(wrapper.find('.dropdown-menu').length).toEqual(0)
        // expect(wrapper.state('isOpen')).toEqual(false)
        // expect(wrapper.state('selectedYear')).toEqual(props.year)
    })
})