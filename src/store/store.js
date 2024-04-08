import {applyMiddleware, combineReducers, createStore} from "redux";
import {animeReducer} from "./reducer";
import thunk from "redux-thunk";
import {seasonsReducer} from "./seasons/reducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  seasons: seasonsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
