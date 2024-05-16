import {applyMiddleware, combineReducers, createStore} from "redux";
import {animeReducer} from "./reducer";
import thunk from "redux-thunk";
import {seasonsReducer} from "./seasons/reducer";
import {animeBySeasonsReducer} from "./anime-by-seasons/reducer";
import {seasonChangeReducer} from "./change-season/reducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  seasons: seasonsReducer,
  animeBySeasons: animeBySeasonsReducer,
  changeSeason: seasonChangeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
