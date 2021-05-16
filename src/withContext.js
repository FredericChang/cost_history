import React, { Component } from 'react'
import { AppContext } from './App'


// function component
const withContext = (Component) => {
    return (props) => (
        <AppContext.Consumer>
            {({state, actions}) => {
                return <Component {...props} date={state} actions={actions}/>
            }}
        </AppContext.Consumer>
    )
}

export default withContext