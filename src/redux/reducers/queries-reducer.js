const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_SUBMITTING = 'SET_SUBMITTING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  searchQuery: '',
  isSubmitting: false,
  currentPage: 1,
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

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
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

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
