const initialState = {
    isLoading: false,
    listUser: [],
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_USER_ACTION_REQUEST":{
            state.isLoading = true;
            return {...state};
        }

        case "GET_ALL_USER_ACTION_FAIL":{
            state.isLoading = true;
            return {...state};
        }

        case "GET_ALL_USER_ACTION_SUCCESS":{
            state.isLoading = false;
            state.listUser = action.payload;
            return {...state};
        }

        default:
            return {...state};
    }
}

export default userReducers;