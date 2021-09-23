const initialState = {
    isLoading: false,
    listPosts: [],
};

const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case "POST_REQUEST":{
            state.isLoading = true;
            return {...state};
        }

        case "POST_FAIL":{
            state.isLoading = true;
            return {...state};
        }

        case "POST_SUCCESS":{
            state.isLoading = false;
            return {...state};
        }

        case "GET_LIST_POST_SUCCESS":{
            state.listPosts = action.payload;
            state.isLoading = false;
            return {...state};
        }

        default:
            return {...state};
    }
}

export default postReducers;