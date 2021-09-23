import Axios from 'axios'
import { Notify } from './../../components/Notifications/Notifications';
import { message } from 'antd';


export const postActionRequest = () => {
    return {
        type: "POST_REQUEST"
    };
};

export const postActionSuccess = (data) => {
    return {
        type: "POST_SUCCESS",
        payload: data,
    };
};

export const postActionFail = () => {
    return {
        type: "POST_FAIL",
    };
};

export const postAPI = (title, linkAvatar, typePost, contentPost) => {
    return async(dispatch) => {
        // dispatch(postActionRequest());
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            Axios.post("https://apisseclub.herokuapp.com/api/v1/posts", {
                title: title,
                linkAvatar: linkAvatar,
                typePost: typePost,
                contentPost: contentPost
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                if (res.data.error === "false") {
                    let message = "Đăng bài thành công!!";
                    let description = "";
                    Notify("success", message, description);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }else{
                    let message = "Đăng bài thất bại!!";
                    let description = "";
                    Notify("error", message, description);
                }
            })
        } catch (error) {
            dispatch(postActionFail());
        }
       
    }
}

export const getListPostSuccess = (data) => {
    return {
        type: "GET_LIST_POST_SUCCESS",
        payload: data,
    };
};

export const fetchAPIPost = (typePost) => {
    return async(dispatch) => {
        dispatch(postActionRequest())
        try {
            await Axios.get("https://apisseclub.herokuapp.com/api/v1/posts/"+ typePost)
            .then(res => dispatch(getListPostSuccess(res.data)))
        } catch (error) {
            dispatch(postActionFail())
        }
    }
}

export const deleteAPIPost = (id) => {
    return async() => {
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.delete("https://apisseclub.herokuapp.com/api/v1/posts/"+ id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                if (res.data.error === "false") {
                    message.success("Xóa bài viết thành công!");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    message.error("Xóa bài viết thất bại!")
                }
            })
        } catch (error) {
            let message = "Xóa bài viết thất bại!";
            let description = "VUi lòng thử lại sau!!";
            Notify("error", message, description);
        }
    }
}


export const updateAPIPost = (id, title, avatar, type, content) => {
    return async() => {
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.put("https://apisseclub.herokuapp.com/api/v1/posts/{id}",{
                id: id,
                title: title,
                avatar: avatar,
                type: type,
                content: content
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                if (res.data.error === "false") {
                    message.success("Cập nhật bài viết thành công!");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    message.error("Cập nhật bài viết thất bại!")
                }
            })
        } catch (error) {
            message.error("Cập nhật bài viết thất bại!")
            console.log(error);
        }
    }
}