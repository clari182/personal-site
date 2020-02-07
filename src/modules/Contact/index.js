import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'


class Contact extends React.Component {
    render() {
        return <div className="section contact">
            <Divider />
            <div className="content">
                <Shape type="bottom" />
            </div>
        </div>
    }
}

export default Contact