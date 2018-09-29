import React from 'react'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    state={

    }
    componentWillMount(){
        const menuTreeNode =  this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }


    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }
    handleClick=()=>{
        console.log('clicked')
    }
    render(){
        return(
            <div className='navLeft'>
                <div className='logo'>
                    <NavLink to="/admin" className='img'>
                        <img style={{height:"100%",width:"100%"}} src="/assets/hatu_logo.png" alt=""/>
                    </NavLink>
                </div>
                <div className='navContent'>
                    <Menu
                        onClick={this.handleClick}
                        theme="dark"
                    >
                        { this.state.menuTreeNode }
                    </Menu>
                </div>

            </div>
        )
    }
}
