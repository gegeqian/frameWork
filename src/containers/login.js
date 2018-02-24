import React from 'react';
import {connect} from 'react-redux';
import {Form,Input,Row,Button} from 'antd';

//引入组件
import LoginComponent from '../component/login/loginComponent.js';
import MessageSearchBar from '../component/message/messageSearchBar.js'

//引入action中方法
import {loginOK} from '../actions/loginAction.js';

const FormItem = Form.Item;

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        loginOK:(obj)=>dispatch(loginOK(obj))
    }
}

class Login extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className='login'>
                <LoginComponent
                    loginOK={this.props.loginOK.bind(this)}
                />
            </div>
        );
    }
}

let login = Form.create()(Login);
export default connect(mapStateToProps,mapDispatchToProps)(login);