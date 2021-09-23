import Axios from "axios"
import { message } from 'antd';

export const getListCarouselRequest = () => {
    return {
        type: "GET_LIST_CAROUSEL_REQUEST",
    };
};

export const getListCarouselSuccess = (data) => {
    return {
        type: "GET_LIST_CAROUSEL_SUCCESS",
        payload: data,
    };
};

export const getListCarouselFail = () => {
    return {
        type: "GET_LIST_CAROUSEL_FAIL",
    };
};

export const fetchAPICarousel = () => {
    return async(dispatch) => {
        dispatch(getListCarouselRequest())
        try {
            await Axios.get("https://apisseclub.herokuapp.com/api/v1/carousels")
            .then(res => dispatch(getListCarouselSuccess(res.data)))
        } catch (error) {
            dispatch(getListCarouselFail())
        }
    }
}

export const updateAPICarousel = (id, link) => {
    return async() => {
        let accessToken = sessionStorage.getItem("accessToken");
        try {
            await Axios.put("https://apisseclub.herokuapp.com/api/v1/carousels/{id}",{
                id: id,
                link: link
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => {
                console.log(res);
                if (res.data.error === "false") {
                    message.success("Cập nhật background thành công!");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    message.error("Cập nhật background thất bại!")
                }
            })
        } catch (error) {
            
        }
    }
}