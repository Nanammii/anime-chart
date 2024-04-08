const BACKEND_URL = 'https://api.jikan.moe/v4';


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
