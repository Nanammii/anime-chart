const initialState = {
  isLoading: false,
  animeBySeasons: {},
  error: null,
};

export const animeBySeasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'anime/load-pending':
      return { ...state, isLoading: true, animeBySeasons: {}, error: null };
    case 'anime/load-success':
      return { ...state, isLoading: false, animeBySeasons: action.payload.animeBySeasons };
    case 'anime/load-failure':
      return { ...state, isLoading: false, animeBySeasons: {}, error: action.payload };
    default:
      return state;
  }
};
