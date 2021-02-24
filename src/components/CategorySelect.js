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

    constructor(props) {
      super(props)
      this.state= {
        selectedCategoryId: props.selectedCategory && props.selectedCategory.id
      }
    }
    selectCategory = (event, category) => {
      this.setState({
        selectedCategoryId: category.id
      })
      this.props.onSelectCategory(category)
      event.preventDefault()
    }
    render() {
      const { categories } = this.props
      const { selectedCategoryId } = this.state
      return (
        <div className="category-select-component">
          <div className="row">
          {
            categories.map((category, index) => {

              const activeClassName = (selectedCategoryId === category.id)
              ? 'category-item col-3 active' : 'category-item col-3'
              return (
                <div className={activeClassName} key={index} onClick={(event) => {this.selectCategory(event, category)}}>
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