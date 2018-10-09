import React from 'react'
import {Card,Form,Button,Input,Icon,message} from 'antd'
import './index.less'



export default class Resume extends React.Component {
    state = {

    };

    //提交
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您提交成功`)
    }


    render(){

        return(
            <div style={{minWidth:'50%',width:"100%"}}>
                <Form layout="horizontal">
                    <div className="basicInfo">
                        
                        <div className='column-wrapper'>


                        </div>
                    </div>

                </Form>
            </div>
        )
    }
}
