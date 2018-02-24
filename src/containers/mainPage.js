import React from 'react';
import {connect} from 'react-redux';
import {Redirect,Route,Link} from "react-router-dom";
import {Layout,Menu,Breadcrumb,Icon} from 'antd';

import MessageRoute from './message/MessageRoute.js';
//引入样式
import '../less/mainPage.less';
//引入图片
import title from '../images/mainpage/title.png';
import exit from '../images/mainpage/icon_exit.png';
import semicircle from '../images/mainpage/icon_semicircle.png';

const {SubMenu} = Menu;
const {Header,Content,Footer,Sider} = Layout;

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}
class MainPage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const height = document.documentElement.clientHeight;
        const contentHeight = height - 240;
        console.log(height);
        console.log(contentHeight);
        const contentStyle = {
            height:contentHeight
        };

        return (
            <div className='mainPageContainer'>
                <Layout>
                    <div className="header">
                            <div className='title'>
                                <img src={title} alt='logo' />
                                <div className='quit'>
                                    <img src={exit} alt='退出'/>
                                </div>
                            </div>
                            
                            <div className='headMenu'>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '40px',backgroundColor: 'transparent'}}
                            >
                                <Menu.Item key="1">OA首页</Menu.Item>
                                <Menu.Item key="2">信息报送</Menu.Item>
                                <Menu.Item key="3">公告公示</Menu.Item>
                            </Menu>
                            </div>
                       
                    </div>
                    <Content style={contentStyle}>
                        {/* <Route path="/messageRoute" component={MessageRoute} /> */}
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);