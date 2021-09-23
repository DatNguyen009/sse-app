const initialState = {
    isLoading: false,
    detailPosts: [],
    detailPostsID: [],
    error: false,
};

const detailPostReducers = (state = initialState, action) => {
    switch (action.type) {

        case "GET_DETAIL_POST_SUCCESS":{
            state.isLoading = false;
            state.error = false;
            state.detailPosts = action.payload;
            return {...state};
        }

        case "GET_DETAIL_POST_ID_SUCCESS":{
            state.detailPostsID = action.payload;
            state.error = false;
            state.isLoading = false;
            return {...state};
        }

        case "GET_DETAIL_POST_FAIL":{
            state.error = true;
            state.isLoading = false;
            return {...state};
        }

        case "GET_DETAIL_POST_REQUEST":{
            state.isLoading = true;
            return {...state};
        }

        default:
            return {...state};
    }
}

export default detailPostReducers;