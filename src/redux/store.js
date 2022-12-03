import { legacy_createStore as createStore ,combineReducers, applyMiddleware, compose} from "redux";
import { authReducer } from "./Authentication/authReducer";
import { productsReducer } from "./getProducts/productReducer";
import thunk  from "redux-thunk"




const rootReducer=combineReducers({
    auth:authReducer,
    products:productsReducer
})


export const store=createStore(rootReducer,compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))