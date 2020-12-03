import React from 'react';
import PropTypes from 'prop-types';
import {padLeft, range} from '../utility'

// normal component

class MonthPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedYear: this.props.year, //initializing Vlaue
        }
    }
    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    selectedYear = (event, yearNumber) => {
        event.preventDefault()
        this.setState({
            selectedYear: yearNumber //return back as selectedNumber
        })
    }
    selectedMonth = (event, monthNumber) => {
        event.preventDefault()
        this.setState({
            isOpen: false 
        })
        this.props.onChange(this.state.selectedYear,monthNumber) // to send the data out
    }


    render() {
        const { year, month} = this.props
        const { selectedYear } = this.state // selected will be taken from state
        const { selectedMonth } = this.state
        const { isOpen } = this.state
        const monthRange = range(12,1)
        const yearRange = range(9, -4).map(number => number+year)
        return (
            <div className="dropdown month-picker-compoent">
                <h4> choose month</h4>
                <button className="btn btn-lg btn-secondary dropdown-toggle"
                        onClick={this.toggleDropdown}
                >
                    {`${year}year ${padLeft(month)}month`}
                </button>

                { isOpen && 
                    <div className="dropdown-menu" style={{display:'block'}}>
                        <div className="row">
                            <div className="col border-right">
                                {yearRange.map((yearNumber, index) =>
                                    <a key={index} 
                                        href='#'
                                        onClick={(event) => {this.selectedYear(event,yearNumber)}}
                                        className={(yearNumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item' }>
                                        {yearNumber} Year
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                {monthRange.map((monthNumber, index) =>
                                    <a key={index} 
                                    href='#'
                                    onClick={(event) => {this.selectedMonth(event,monthNumber)}}
                                    className={(monthNumber === year) ? 'dropdown-item active' : 'dropdown-item' }>
                                        {padLeft(monthNumber)} Month
                                    </a>
                                )}
                            </div>
                         </div>
                    </div>
                }
                
            </div>
        )
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthPicker


// to added OnClick for Year 
// to added selectedYear in constructor
// to define the function of selectedYear
// to invoke the state value from constructor in the beginneng of render()

// to added OnClick for Month 
// to define the function of selectedYear, this funciton is includeed return function ( on Change )
// onchange means any change will be send it to App.js, because App.js invokes MonthPicker.js

// to add propTypes