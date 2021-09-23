import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './index.css';
import logo from '../../assets/logo/logo.png'
import {MenuOutlined} from '@ant-design/icons';
import { Drawer } from 'antd';

export default function Header() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="sse__logo">
                            <Link to="/">
                                <img src={logo} alt="logo-sse" />   
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="sse__listMenu">
                            
                            <Link to="/">
                                <p>Trang chủ</p>
                                <div className="border__bottom"></div>
                           </Link>
                            <Link to="/chuong-trinh-trong-diem">
                                <p>Chương trình trọng điểm</p>
                                <div className="border__bottom"></div>
                           </Link>
                            <Link to="/su-kien">
                                <p>Sự kiện</p>
                                <div className="border__bottom"></div>
                           </Link>
                            <Link to="/tin-tuc">
                                <p>Tin tức</p>
                                <div className="border__bottom"></div>
                           </Link>
                            <Link to="/nhan-su-lien-he">
                                <p>Nhân sự - Liên hệ</p>
                                <div className="border__bottom"></div>
                           </Link>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="sse__type">
                            <MenuOutlined style={{fontSize: "30px"}} onClick={showDrawer}/>
                            <Drawer title="SSE CLUB" placement="right" onClose={onClose} visible={visible}>
                            <div className="sse__listMenu--draw" style={{display: "block", textAlign: 'left'}}>
                                <Link to="/">
                                    <p>Trang chủ</p>
                                    <div className="border__bottom"></div>
                                </Link>
                                <Link to="/chuong-trinh-trong-diem">
                                    <p>Chương trình trọng điểm</p>
                                    <div className="border__bottom"></div>
                                </Link>
                                <Link to="/su-kien">
                                    <p>Sự kiện</p>
                                    <div className="border__bottom"></div>
                                </Link>
                                <Link to="/tin-tuc">
                                    <p>Tin tức</p>
                                    <div className="border__bottom"></div>
                                </Link>
                                <Link to="/nhan-su-lien-he">
                                    <p>Nhân sự - Liên hệ</p>
                                    <div className="border__bottom"></div>
                                </Link>
                            </div>
                            </Drawer>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
