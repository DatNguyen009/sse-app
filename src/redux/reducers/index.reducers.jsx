import { combineReducers } from "redux";
import productsReducers from "./products.reducers";
import loadingReducers from './loading.reducers';
import postReducers from './post.reducers';
import carouselReducers from './carousel.reducers';
import detailPostReducers from './detailPost.reducers';
import userReducers from './user.reducers';



const rootReducers = combineReducers({
    products: productsReducers,
    loadings: loadingReducers,
    posts: postReducers,
    carousels: carouselReducers,
    detailPost: detailPostReducers,
    user: userReducers
});

export default rootReducers;