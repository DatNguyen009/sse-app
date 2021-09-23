import Axios from 'axios'
import { Notify } from './../../components/Notifications/Notifications';

export const registerAPI = (name, password) => {
    return async() => {
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.post("https://apisseclub.herokuapp.com/api/v1/user",{
                name: name,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                if (res.data.error === "Fail") {
                    let message = "Đăng ký thất bại!!";
                    let description = "";
                    Notify("error", message, description)
                }else{
                    let message = "Đăng ký thành công!!";
                    let description = "";
                    Notify("success", message, description);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
