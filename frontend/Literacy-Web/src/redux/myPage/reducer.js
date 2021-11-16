import * as types from "./types";

const initialState = {
  status: {
    valid: false,
    loading: false,
    searchWordsList: [],
    dictionaryWordsList: [],
  },
};

export default function myPage(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_WORDS_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.SEARCH_WORDS_REQUEST_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          searchWordsList: action.searchWords,
        },
      };
    case types.SEARCH_WORDS_REQUEST_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          valid: false,
        },
      };
    case types.DICTIONARY_WORDS_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.DICTIONARY_WORDS_REQUEST_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          dictionaryWordsList: action.dictionaryWords,
        },
      };
    case types.DICTIONARY_WORDS_REQUEST_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          valid: false,
        },
      };
    case types.WORD_DELETE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.WORD_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          dictionaryWordsList: action.deletedDictionary,
        },
      };
    case types.WORD_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          valid: false,
        },
      };
    default:
      return state;
  }
}
