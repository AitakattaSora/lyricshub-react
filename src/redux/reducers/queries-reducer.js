const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_SUBMITTING = 'SET_SUBMITTING';

const initialState = {
  searchQuery: '',
  isSubmitting: false,
};

export const queriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.query,
      };
    }

    case SET_SUBMITTING: {
      return {
        ...state,
        isSubmitting: action.isSubmitting,
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

export const setSubmitting = (isSubmitting) => ({
  type: SET_SUBMITTING,
  isSubmitting,
});
