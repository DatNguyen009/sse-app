import React, { useEffect, useState } from 'react'
import { Tabs, Table, Space, Button, Modal, Input, Select, Divider, Avatar } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState, convertFromHTML  } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { fetchAPIPost, updateAPIPost } from '../../../../../redux/actions/post.action';
import { deleteAPIPost } from './../../../../../redux/actions/post.action';
import { fetchAPIDetailPostID } from './../../../../../redux/actions/detailPost.action';
import Loading from '../../../../../components/Loading/Loading';


function ManagerPost() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [linkAvatar, setLinkAvatar] = useState("");
    const [typePost, setTypePost] = useState("");
    const [postId, setPostId] = useState(0);
    const { TabPane } = Tabs;
    const { confirm } = Modal;
    const { Option } = Select;
    const listPosts = useSelector(state => state.posts.listPosts.data)
    const detailPostID = useSelector(state => state.detailPost.detailPostsID.data)
    const LOADINGDETAILPOST = useSelector(state => state.detailPost.isLoading)

    const [editorState, setEditorState] = useState(
        ()  =>  EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML("<p>djdsakjhdsahkjdsa</p>")
                    )
                )
      );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPIPost("chuong-trinh-trong-diem"));
    }, [])

    function showDeleteConfirm(id) {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa bài viết này không?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(deleteAPIPost(id));
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
          title: 'Tên BV',
          dataIndex: 'post_title',
          key: 'post_title',
          render: text => <p>{text}</p>,
        },
        {
            title: 'Loại BV',
            dataIndex: 'post_type',
            key: 'post_type',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Ngày đăng',
            dataIndex: 'created_at',
            key: 'created_at',
            render: text => <p>{text.slice(0, 10)}</p>,
        },
        {
          title: 'Action',
          key: 'id',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => showModal(record.id)}>Sửa</Button>
              <Button type="danger" onClick={() => showDeleteConfirm(record.id)} >Xóa</Button>
            </Space>
          ),
        },
      ];

    const handleTabs = (key) => {
        if (key === '1') {
            dispatch(fetchAPIPost("chuong-trinh-trong-diem"));
        }
        if (key === '2') {
            dispatch(fetchAPIPost("su-kien"));
        }
        if (key === '3') {
            dispatch(fetchAPIPost("tin-tuc"));
        }
    }

    const showModal = (id) => {
        setIsModalVisible(true);
        setPostId(id)
        dispatch(fetchAPIDetailPostID(id))
    };
    
    useEffect(() => {
        if (detailPostID !== undefined) {
            setEditorState(()  =>  EditorState.createWithContent(
                ContentState.createFromBlockArray(
                    convertFromHTML(detailPostID[0].post_content)
                )
            ))
            setTitle(detailPostID[0].post_title);
            setLinkAvatar(detailPostID[0].post_avatar);
            setTypePost(detailPostID[0].post_type); 
        }
    }, [detailPostID])

    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(updateAPIPost(postId, title, linkAvatar, typePost, draftToHtml(convertToRaw(editorState.getCurrentContent()))))
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onLinkChange = (e) => {
        setLinkAvatar(e.target.value);
    }

    const onTypePostChange = (value) => {
        setTypePost(value);
    }

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };
   
    if (LOADINGDETAILPOST === true) {
        return <Loading />
    }
    
    return (
        <div>
            <Tabs tabPosition={'top'} onTabClick={(key) => handleTabs(key)}>
                <TabPane tab="Chương trình trọng điểm" key="1">
                    <Table columns={columns}  dataSource={listPosts} />
                </TabPane>
                <TabPane tab="Sự kiện" key="2">
                    <Table columns={columns} dataSource={listPosts} />
                </TabPane>
                <TabPane tab="Tin tức" key="3">
                    <Table columns={columns} dataSource={listPosts} />
                </TabPane>
            </Tabs>
            <Modal title="Cập nhật bài viết" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'700px'}>
                {
                    detailPostID?.map((item, index) => (
                        <div key={'detailpostid' + index}>
                            <h6>Tiêu đề của bài viết</h6>
                            <Input defaultValue={item.post_title} onChange={onTitleChange}/>
                            <h6 className="mt-2">Ảnh đại diện bài viết</h6>
                            <Input defaultValue={item.post_avatar} onChange={onLinkChange}/>
                            <h6 className="mt-2">Thể loại bài viết</h6>
                            <Select style={{ width: 220 }} defaultValue={item.post_type} onChange={onTypePostChange}>
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
                        </div>
                    ))
                }
            </Modal>
        </div>
    )
}

export default React.memo(ManagerPost);
