import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Utils from '../../utils/utils'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:"哈兔大佬"
        })
        setInterval(()=>{
            let time = Utils.formatDate(new Date().getTime())
            this.setState({
                time
            })
        },1000)
        // this.getWeatherAPIData() //国内天气查询
    }

    // getWeatherAPIData(){
    //     let city = '北京';
    //     Axios.jsonp({
    //         url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    //     }).then((res)=>{
    //         if(res.status == 'success'){
    //             let data = res.results[0].weather_data[0];
    //             this.setState({
    //                 dayPictureUrl:data.dayPictureUrl,
    //                 weather:data.weather
    //             })
    //         }
    //     })
    // }

    render(){
        return(
            <div className="header">
               <Row className="header-top">
                   <Col span="24">
                       <span style={{margin:'0 20px'}}>
                           {this.state.time}
                       </span>
                       <span>
                           欢迎，{this.state.userName}！
                       </span>
                       <a href="/#/login">退出</a>
                   </Col>
               </Row>
                {/*<Row className="breadcrumb">*/}
                    {/*<Col span="4" className="breadcrumb-title">*/}
                       {/*首页*/}
                    {/*</Col>*/}
                    {/*<Col span="20" className="weather">*/}
                        {/*<span className="date">2018-9-26</span>*/}
                        {/*<span className="weather-detail">晴转多云</span>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
            </div>
        )
    }
}