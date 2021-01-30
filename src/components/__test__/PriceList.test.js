import React from 'react'
import { shallow } from 'enzyme'
import Ionicon from 'react-ionicons'
import  PriceList  from '../../components/PriceList';
// import { items, categories } from '../../containers/Home'

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

const itemsWithCategory = items.map(item => {
    item.category = categories[item.cid]
    return item
})

const props = {
    items: itemsWithCategory,
    // onModifyItem: () => {},
    // onDeleteItem: () => {},
    onModifyItem: jest.fn(),
    onDeleteItem: jest.fn(),
}

let wrapper
describe('test TotalPrice component', () => {
    beforeEach(()=> {
        wrapper = shallow(<PriceList {...props}/>)
    })
    it('should render the component to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correct price items length', () => {
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
    })
    it('should render correct icon and price for each item', () => {
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
        expect(iconList.length).toEqual(3)
        expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)
    })
    it('should trigger the correct function callback', () => {
        const firstItem = wrapper.find('.list-group-item').first()
        firstItem.find('a').first().simulate('click')
        expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])
        // firstItem.find('a').last().simulate('click')
        // expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
    })
})