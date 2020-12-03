import React from 'react'
import { shallow } from 'enzyme'
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
    onModifyItem: () => {},
    onDeleteItem: () => {},
}
let wrapper
describe('test TotalPrice component', () => {
    beforeEach(()=> {
        wrapper = shallow(<PriceList {...props}/>)
    })
    it('should render the component to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})