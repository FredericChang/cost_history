import React from 'react';
import PropTypes from 'prop-types';
import {padLeft} from '../utility'

// normal component

class MonthPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false;
        }
    }
    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        const { year, month} = this.props
        const { isOpen } = this.state
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
                        <h2>Hello World</h2>
                    </div>
                }
            </div>
    


        )
    }
}
export default MonthPicker