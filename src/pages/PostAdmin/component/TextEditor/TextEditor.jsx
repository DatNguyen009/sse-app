import React, { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ReactHtmlParser from 'react-html-parser';
import { Divider, Modal, Button, Input, Select, message, Tabs  } from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIPost, postAPI } from '../../../../redux/actions/post.action';
import ManagerBackground from './component/ManagerBackground';
import ManagerPost from './component/ManagerPost';



export default function TextEditor() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [linkAvatar, setLinkAvatar] = useState("");
    const [typePost, setTypePost] = useState("");
    const { Option } = Select;
    const { TabPane } = Tabs;
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
      };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const checkValidate = () => {
        if (title === "") {
            return message.error('Vui lòng nhập tiêu đề bài viết!');
        }
        if (linkAvatar === "") {
            return message.error('Vui lòng nhập link ảnh!');
        }
        if (typePost === "") {
            return message.error('Vui lòng nhập thể loại bài viết!');
        }
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onLinkChange = (e) => {
        setLinkAvatar(e.target.value);
    }

    const onTypePostChange = (value) => {
       setTypePost(value);
    }
    
    const onSubmitPost = () => {
        if (checkValidate() === undefined) {
            dispatch(postAPI(title, linkAvatar, typePost, draftToHtml(convertToRaw(editorState.getCurrentContent()))))
        }
    }

    useEffect(() => {
       dispatch(fetchAPIPost());
    }, [])

    const listPost = useSelector(state => state.posts.listPosts);
  

    return (
        <div >
            <Tabs tabPosition={'left'}>
                <TabPane tab="Đăng bài" key="1">
                    <h6>Nhập tiêu đề của bài viết</h6>
                    <Input placeholder="Nhập tiêu đề" onChange={onTitleChange} />
                    <h6 className="mt-2">Nhập ảnh đại diện bài viết</h6>
                    <Input placeholder="Nhập link ảnh" onChange={onLinkChange} />
                    <h6 className="mt-2">Nhập thể loại bài viết</h6>
                    <Select style={{ width: 220 }} allowClear onChange={onTypePostChange}>
                        <Option value="chuong-trinh-trong-diem">Chương trình trọng điểm</Option>
                        <Option value="su-kien">Sự kiện</Option>
                        <Option value="tin-tuc">Tin tức</Option>
                    </Select>
                    <Divider />
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}
                    />
                    <Divider />
                    <div style={{display: 'flex', justifyContent: 'end', marginTop: '7rem'}}>
                        <Button type="primary" onClick={showModal}>
                            Xem trước
                        </Button>
                        <Button type="primary" className="ml-2" onClick={onSubmitPost}>Đăng bài</Button>
                    </div>
                    <Modal title="Xem trước" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={770}>
                        <h4 style={{borderBottom: "2px solid #0a9cf1", color: "#0a9cf1", width: "max-content"}}>{title}</h4>
                        {ReactHtmlParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
                    </Modal>
                </TabPane>
                <TabPane tab="Quản lý bài viết" key="2">
                    <ManagerPost />
                </TabPane>
                <TabPane tab="Quản lý background" key="3">
                    <ManagerBackground />
                </TabPane>
            </Tabs>
        </div>
    )
}
