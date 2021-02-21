import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { Colors } from '../utility'

export const categories = [
    {
     "id": "1",
     "name": "旅行",
     "type": "outcome",
     "iconName": "ios-plane",    
   },
    {
     "id": "2",
     "name": "理财",
     "type": "income",
     "iconName": "logo-yen", 
   },
   {
     "id": "3",
     "name": "理财",
     "type": "income",
     "iconName": "logo-yen", 
   }
 ]

class CategorySelect extends React.Component {

    render() {
      const { categories, selectedCategory } = this.props
      return (
        <div className="category-select-component">
          <div className="row">
          {
            categories.map((category, index) => {

              const activeClassName = (selectedCategory && selectedCategory.id === category.id)
              ? 'category-item col-3 active' : 'category-item col-3'
              return (
                <div className={activeClassName} key={index}>
                  <Ionicon
                    className="rounded-circle"
                    fontSize="50px"
                    color='#555'
                    icon={category.iconName}
                  />

                </div>
              )
            })
          }
          </div>
        </div>
      )
    }
  }
  
  CategorySelect.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    onSelectCategory: PropTypes.func.isRequired,
  }
  export default CategorySelect