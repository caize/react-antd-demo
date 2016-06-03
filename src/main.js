/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

// 引入主体样式文件
import './main.css';

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js';

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '1'
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 240 }}
                        defaultOpenKeys={['sub1']}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2">选项2</Menu.Item>
                            <Menu.Item key="3">选项3</Menu.Item>
                            <Menu.Item key="4">选项4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="5">选项5</Menu.Item>
                            <Menu.Item key="6">选项6</Menu.Item>
                            <SubMenu key="sub3" title="三级导航">
                                <Menu.Item key="7">选项7</Menu.Item>
                                <Menu.Item key="8">选项8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title = {<span><Icon type="setting" /><span>导航三</span></span>}>
                            <Menu.Item key="9">选项9</Menu.Item>
                            <Menu.Item key="10">选项10</Menu.Item>
                            <Menu.Item key="11">选项11</Menu.Item>
                            <Menu.Item key="12">选项12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <Route path="myTable" component={myTable} />
        </Route>
    </Router>
), document.getElementById('app'));


