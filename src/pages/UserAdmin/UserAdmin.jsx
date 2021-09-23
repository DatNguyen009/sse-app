import React, { useEffect } from 'react'
import {Redirect} from "react-router-dom";
import { Table, Space, Button, Tabs, Input, Form, message, Modal } from 'antd';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerAPI } from './../../redux/actions/register.action';
import { fetchAPIUser } from '../../redux/actions/user.action';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteAPIUser } from './../../redux/actions/user.action';

export default function UserAdmin() {
    const USERLOGIN = sessionStorage.getItem("userLogin");
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const { confirm } = Modal;

    useEffect(() => {
        dispatch(fetchAPIUser())
    }, [])
    const listUser = useSelector(state => state.user.listUser.data);

    function showDeleteConfirm(id) {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa người dùng này không?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(deleteAPIUser(id));
            },
            onCancel() {

            },
        });
    }
    
    const columns = [
        {
          title: 'STT',
          dataIndex: 'id',
          key: 'id',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Tên tài khoản',
          dataIndex: 'name',
          key: 'name',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Hành động',
          key: 'id',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary">Sửa</Button>
              <Button type="danger" onClick={() => showDeleteConfirm(record.id)}>Xóa</Button>
            </Space>
          ),
        },
      ];


    const onFinish = (values) => {
        dispatch(registerAPI(values.username, values.password))
    };
    
    const onFinishFailed = () => {
        message.error("Vui lòng không bỏ trống tên tài khoản hoặc mật khẩu!!");
    };


    return USERLOGIN === "datnguyen" ? (
        <div className="PostAdmin__texteditor">
            <Tabs tabPosition={'left'} >
                <TabPane tab="Thêm tài khoản" key="1">
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
                                Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                </TabPane>
                <TabPane tab="Quản lý tài khoản" key="2">
                    <Table columns={columns} dataSource={listUser}/>
                </TabPane>
            </Tabs>
        </div>
    ) : ( <Redirect to="/dang-nhap" /> ) 
}
