const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

const initialState = {
  searchQuery: '',
};

export const queriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.query,
      };
    }

    default:
      return state;
  }
};

export const setSearch = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  query: searchQuery,
});
