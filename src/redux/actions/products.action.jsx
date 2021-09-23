import Axios from 'axios'

export const getProductListActionRequest = () => {
    return {
        type: "GET_PRODUCT_LIST_REQUEST"
    };
};

export const getProductListActionSuccess = (data) => {
    return {
        type: "GET_PRODUCT_LIST_SUCCESS",
        payload: data,
    };
};

export const getProductListActionFail = () => {
    return {
        type: "GET_PRODUCT_LIST_FAIL",
    };
};

export const getProductListAPI = () => {
    return async(dispatch) => {
        dispatch(getProductListActionRequest());
        try {
            await Axios.get('http://localhost:8080/apiDTfood/public/api/v1/products')
            .then(res => {  
                dispatch(getProductListActionSuccess(res.data));
            })
        } catch (error) {
            dispatch(getProductListActionFail());
        }
       
    }
}

export const addProducts = (products) => {
    return{
        type: "ADD_PRODUCT",
        payload: products
    };
};