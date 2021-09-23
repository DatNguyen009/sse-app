const initialState = {
    isLoading: false,
    listCarousels: [],
    error: false
};

const carouselReducers = (state = initialState, action) => {
    switch (action.type) {

        case "GET_LIST_CAROUSEL_SUCCESS":{
            state.listCarousels = action.payload;
            state.isLoading = false;
            return {...state};
        }

        case "GET_LIST_CAROUSEL_FAIL":{
            state.error = true;
            state.isLoading = false;
            return {...state};
        }

        case "GET_LIST_CAROUSEL_REQUEST":{
            state.isLoading = true;
            return {...state};
        }

        default:
            return {...state};
    }
}

export default carouselReducers;