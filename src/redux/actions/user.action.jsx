import Axios from 'axios'
import { Notify } from './../../components/Notifications/Notifications';
import { message } from 'antd';

export const getAllUserActionRequest = () => {
    return{
        type: "GET_ALL_USER_ACTION_REQUEST"
    };
}

export const getAllUserActionSuccess = (data) => {
    return{
        type: "GET_ALL_USER_ACTION_SUCCESS",
        payload: data
    };
}

export const getAllUserActionFail = () => {
    return{
        type: "GET_ALL_USER_ACTION_FAIL"
    };
}

export const fetchAPIUser = () => {
    return async(dispatch) => {
        dispatch(getAllUserActionRequest())
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.get("https://apisseclub.herokuapp.com/api/v1/user", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => dispatch(getAllUserActionSuccess(res.data)))
        } catch (error) {
            dispatch(getAllUserActionFail())
        }
    }
}

export const deleteAPIUser = (id) => {
    return async() => {
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.delete("https://apisseclub.herokuapp.com/api/v1/user/"+ id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                if (res.data.error === "false") {
                    message.success("Xóa người dùng thành công!");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    message.error("Xóa người dùng thất bại!")
                }
            })
        } catch (error) {
            let message = "Xóa người dùng thất bại!";
            let description = "VUi lòng thử lại sau!!";
            Notify("error", message, description);
        }
    }
}