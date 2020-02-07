import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'
import './index.scss'


class About extends React.Component {
    render() {
        return <div className="section about">
            <Divider />
            <div className="content">
                <Shape type="top" />
                <p>laknfwekjbfwe</p>
            </div>
        </div >
    }
}

export default About