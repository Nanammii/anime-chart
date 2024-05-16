import {DEFAULT_SEASON} from "../../const";

const initialState = {
  season: DEFAULT_SEASON
};

export const seasonChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'season/changeSeason':
      return { ...state, season: action.payload};
    default:
      return state;
  }
};
