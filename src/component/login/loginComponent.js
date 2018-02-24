import React from 'react';
import {Input,Form,Button,Row,Col} from 'antd';

//引入图片
import head from '../../images/login/head.jpg';
import logoTitle from '../../images/login/logoTitle.png';
import foot from '../../images/login/foot.jpg';

//引入样式
import './index.less';

const FormItem = Form.Item;

class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    clickLogin(){
        this.props.form.validateFields((err,values)=>{
            if (!err) {
                console.log('login values of form: ', values);
                this.props.loginOK(values);
            }
        });
    }
    render(){
        const height = document.documentElement.clientHeight;
        const width = document.documentElement.clientWidth;
        const loginStyle = {
            height:height,
            width:width
        };

        const {getFieldDecorator} = this.props.form;
        return (
            <div className='loginComponent' style={loginStyle}>
                <div className='head'>
                    <img src={head} alt='头部背景图片'/>
                </div>

                <div className='loginOperator'>
                    <img src={logoTitle} alt='logo' className='logoTitle' />
                    <div className='inputForm'>
                        <Form className='loginForm'>
                            <FormItem label='账号：' className='formItemStyle'>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input style={{width:200}} placeholder="请输入账号"/>
                                )}
                            </FormItem>

                            <FormItem label='密码：' className='formItemStyle'>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input style={{width:200}} placeholder="请输入密码"/>
                                )}
                            </FormItem>

                            <FormItem className='formItemStyle'>
                                <Button type="primary" className='loginButton' onClick={this.clickLogin.bind(this)}>
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>

                <div className='foot'>
                    <img src={foot} alt='foot' />
                </div> 
            </div>
        );
    }
}

const loginComponent = Form.create()(LoginComponent);
export default loginComponent;