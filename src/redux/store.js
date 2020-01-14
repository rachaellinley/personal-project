import { createStore, combineReducers, applyMiddleware} from 'redux';
import promise from "redux-promise-middleware";
import authReducer from "./reducers/authReducer";
import reviewsReducer from "./reducers/reviewsReducer";

const rootReducer = combineReducers({
    authReducer,
    reviewsReducer,
})

export default createStore(rootReducer, applyMiddleware(promise));