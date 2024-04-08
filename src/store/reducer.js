const initialState = {
  isLoadingAnime: false,
  anime: {},
  error: null,
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'seasons/load-pending':
      return { ...state, isLoadingAnime: true, anime: {}, error: null };
    case 'seasons/load-success':
      return { ...state, isLoadingAnime: false, anime: action.payload.anime };
    case 'seasons/load-failure':
      return { ...state, isLoadingAnime: false, anime: {}, error: action.payload };
    default:
      return state;
  }
};
