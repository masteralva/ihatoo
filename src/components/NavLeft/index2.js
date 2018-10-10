import React from 'react'
import { Menu, Icon, Button } from 'antd';
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom";
import MenuConfig from './../../config/menuConfig';
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        collapsed: false,
        currentKey:''
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (

                    <SubMenu title={<span><Icon type="mail" /><span>{item.title}</span></span>} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                <Icon type="pie-chart" />
                <span>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </span>

            </Menu.Item>
        })
    }
    componentWillMount(){
        const menuTreeNode =  this.renderMenu(MenuConfig)
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    render() {
        return (
            <div >
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    // style={{width:"400px"}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft);