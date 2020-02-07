import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'
import './index.scss'


class About extends React.Component {
    render() {
        return <div className="about">
            <Shape type="top" />
            <Divider />
        </div >
    }
}

export default About