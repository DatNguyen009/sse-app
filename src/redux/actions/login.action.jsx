import Axios from "axios"
import { Notify } from './../../components/Notifications/Notifications';


export const loginActionRequest = () => {
    return {
        type: "LOGIN_ACTION_REQUEST"
    };
}

export const loginActionSuccess = (user) => {
    return {
        type: "LOGIN_ACTION_SUCCESS",
        payload: user
    };
}

export const loginApi = (email, password, history) => {
    return async(dispatch) => {
        try {
            await Axios.post("https://apisseclub.herokuapp.com/api/v1/login",{
                email: email,
                password: password
            })
            .then(res => {
                if (res.data.error === "Fail") {
                    let message = "Đăng nhập thất bại!!";
                    let description = "Vui lòng kiểm tra lại tài khoản và mật khẩu!";
                    Notify("error", message, description)
                }else{
                    let message = "Đăng nhập thành công!!";
                    let description = "";
                    Notify("success", message, description);
                    sessionStorage.setItem("userLogin", email);
                    sessionStorage.setItem("accessToken", res.data.accessToken);
                    history.push({pathname:'/dang-bai'});
                }
            })
        } catch (error) {
            let message = "Đăng nhập thất bại!!";
            let description = "Vui lòng kiểm tra lại tài khoản và mật khẩu!";
            Notify("error", message, description)
        }
    }
}
