import React from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft/index2'
import './style/common.less'
export default class Admin extends React.Component {

    render(){
        return(
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                    <Header />
                    <Row className="content">
                        <div className={"home-wrap"}>
                            {this.props.children}
                        </div>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}