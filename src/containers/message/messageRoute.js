import React from 'react';
import {connect} from 'react-redux';
import {Route, IndexRoute, Link} from 'react-router-dom';

import {Layout,Menu,Breadcrumb,Icon} from 'antd';

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
class MessageRoute extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <Layout >
                <Sider width={200} style={{backgroundColor:'rgb(15,31,48)'}}>,
                
                </Sider>
                <Content style={{ minHeight: 280 }}>
                    <h1>11111111111111111111111</h1>
                </Content>
            </Layout>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageRoute);