import {YEAR_NOW} from "../../const";

const initialState = {
  loading: false,
  seasons: {},
  error: null,
};

export const seasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'seasons-all/load-pending':
      return { ...state, loading: true, seasons: {}, error: null };
    case 'seasons-all/load-success':
      const currentSeason = action.payload.seasons.find((item) => item.year === YEAR_NOW);
      return { ...state, loading: false, seasons: currentSeason };
    case 'seasons-all/load-failure':
      return { ...state, loading: false, seasons: {}, error: action.payload };
    default:
      return state;
  }
};
