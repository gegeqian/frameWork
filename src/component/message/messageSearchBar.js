import React from 'react';
import {Input,Form,Button,Row} from 'antd';

//引入样式
import './messageSearchBar.less';
const FormItem = Form.Item;

class MessageSearchBar extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;

        return (
            <div className='messageSearchBar'>
                <Form>
                    <Row>
                        <FormItem label='标题' className='formItemStyle'>
                            <Input />
                        </FormItem>

                        <FormItem label='投稿人' className='formItemStyle'>
                            <Input />
                        </FormItem>

                        <FormItem label='投稿开始时间' className='formItemStyle'>
                            <Input />
                        </FormItem>

                        <FormItem label='投稿结束时间' className='formItemStyle'>
                            <Input />
                        </FormItem>

                        <FormItem label='状态' className='formItemStyle'>
                            <Input />
                        </FormItem>
                    </Row>
                </Form>
            </div>
        );
    }
}

const messageSearchBar = Form.create()(MessageSearchBar);
export default messageSearchBar;