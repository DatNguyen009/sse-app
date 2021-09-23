import Axios from 'axios'

export const getDetailPostRequest = () => {
    return {
        type: "GET_DETAIL_POST_REQUEST",
    };
};

export const getDetailPostSuccess = (data) => {
    return {
        type: "GET_DETAIL_POST_SUCCESS",
        payload: data,
    };
};

export const getDetailPostFail = () => {
    return {
        type: "GET_DETAIL_POST_FAIL",
    };
};

export const getDetailPostIDSuccess = (data) => {
    return {
        type: "GET_DETAIL_POST_ID_SUCCESS",
        payload: data,
    };
};


export const fetchAPIDetailPost = (slug) => {
    return async(dispatch) => {
        dispatch(getDetailPostRequest())
        try {
            await Axios.get("https://apisseclub.herokuapp.com/api/v1/detailPost/"+ slug)
            .then(res => dispatch(getDetailPostSuccess(res.data)))
        } catch (error) {
            dispatch(getDetailPostFail())
        }
    }
}


export const fetchAPIDetailPostID = (id) => {
    return async(dispatch) => {
        dispatch(getDetailPostRequest())
        try {
            await Axios.get("https://apisseclub.herokuapp.com/api/v1/detailPostId/"+ id)
            .then(res => dispatch(getDetailPostIDSuccess(res.data)))
        } catch (error) {
            dispatch(getDetailPostFail())
        }
    }
}