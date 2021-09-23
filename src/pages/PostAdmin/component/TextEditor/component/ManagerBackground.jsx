import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Input, message  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPICarousel } from '../../../../../redux/actions/carousel.action';
import { updateAPICarousel } from './../../../../../redux/actions/carousel.action';

export default function ManagerBackground() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [carouselId, setCarouselId] = useState(1);
    const [newLink, setNewLink] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPICarousel());
     }, [])
 
    const listCarousel = useSelector(state => state.carousels.listCarousels);

    const columns = [
        {
          title: 'STT',
          dataIndex: 'carousel_id',
          key: 'carousel_id',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Ảnh',
          dataIndex: 'carousel_link',
          key: 'carousel_link',
          render: (text, record) => (
            <Space size="middle">
              <img src={record.carousel_link} alt="" width="200"/>
            </Space>
          ),
        },
        {
          title: 'Action',
          key: 'carousel_id',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => showModal(record.carousel_id)}>Sửa</Button>
              <Button type="danger">Xóa</Button>
            </Space>
          ),
        },
      ];
    
    const showModal = (carousel_id) => {
      setIsModalVisible(true);
      setCarouselId(carousel_id);
    };
    
    const handleOk = () => {
 
        if (newLink === "") {
          return message.error("Vui lòng nhập link background mới đi nha :)");
        }else{
          dispatch(updateAPICarousel(carouselId, newLink))
          setIsModalVisible(false);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChangeLink = (e) => {
      setNewLink(e.target.value);
    }

    return (
        <div>
            <Table columns={columns} dataSource={listCarousel} />
            <Modal title="Chỉnh sửa background" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Nhập link background mới</p>
                <Input placeholder="Nhập link" onChange={handleChangeLink}/>
            </Modal>
        </div>
    )
}
