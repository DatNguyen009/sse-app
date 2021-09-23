import React from 'react'
import { Form, Input, Button } from 'antd';
import logo from '../../assets/logo/logo.png'
import './index.css'
import { loginApi } from './../../redux/actions/login.action';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(loginApi(values.username, values.password, history))
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div >
            <div style={{zIndex: 99999}}>
                <div className="sse__logo">
                    <img src={logo} alt="logo-sse" />       
                </div>
                <h3 className="login__title">Đăng nhập</h3>
                <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                // initialValues={{
                //     remember: true,
                // }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                >
                    <Form.Item
                        label="Tài khoản"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 10,
                        }}
                    >
                        <Button type="primary" htmlType="submit" >
                        Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    )
}
