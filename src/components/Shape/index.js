import React from 'react'
import styled from 'styled-components'
import './index.scss'


class Shape extends React.Component {        
    render() {
        const { type } = this.props
        return <div className="shape-container">
            <div className={`top top-${type}`}></div>
            <div className={`right right-${type}`}></div>
            <div className={`bottom bottom-${type}`}></div>

        </div>
    }
}

export default Shape