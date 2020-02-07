import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'


class Porfolio extends React.Component {
    render() {
        return <div className="section portfolio">
            <Divider />
            <div className="content">
                <Shape type="right" />
            </div>
        </div>
    }
}

export default Porfolio