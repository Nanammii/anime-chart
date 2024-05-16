import {BACKEND_URL, YEAR_NOW} from "../const";

export const fetchAnimeSeasons = () => {
  return async (dispatch) => {
    dispatch({ type: 'seasons/load-pending' });

    try {
      const response = await fetch(`${BACKEND_URL}/seasons/now`);
      const data = await response.json();
      console.log(data)

      dispatch({ type: 'seasons/load-success', payload: {anime: data.data} });
    } catch (error) {
      dispatch({ type: 'seasons/load-failure', payload: error.message });
    }
  };
};

export const fetchAnimeSeasonsAll = () => {
  return async (dispatch) => {
    dispatch({ type: 'seasons-all/load-pending' });

    try {
      const response = await fetch(`${BACKEND_URL}/seasons`);
      const seasons = await response.json();

      dispatch({ type: 'seasons-all/load-success', payload: {seasons: seasons.data} });

    } catch (error) {
      dispatch({ type: 'seasons-all/load-failure', payload: error.message });
    }
  };
};

export const fetchAnimeBySeasons = (season = 'spring') => {
  return async (dispatch) => {
    dispatch({type: 'anime/load-pending'});

    try {
      const response = await fetch(`${BACKEND_URL}/seasons/${YEAR_NOW}/summer?filter=tv`);
      const animeBySeasons = await response.json();

      dispatch({ type: 'anime/load-success', payload: {animeBySeasons: animeBySeasons.data} });

    } catch (error) {
      dispatch({ type: 'anime/load-failure', payload: error.message });
    }
  }
}

export const changeSeason = (season) => {
  return {type: 'season/changeSeason', payload: season};
}
