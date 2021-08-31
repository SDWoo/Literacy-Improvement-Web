/* REGISTER */
import * as types from "./types";

const initialState = {
  register: {
    status: "INIT",
  },
  duplicateId: {
    status: "INIT",
  },
};

export default function register(state = initialState, action) {
  switch (action.type) {
    /* REGISTER */
    case types.REGISTER:
      return {
        ...state,
        register: {
          status: "WAITING",
        },
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          status: "SUCCESS",
        },
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        register: {
          status: "FAILURE",
        },
      };

    /* duplicateId CHECK USER_ID */
    case types.DUPLICATE_ID:
      return {
        ...state,
        duplicateId: {
          status: "WAITING",
        },
      };
    case types.DUPLICATE_ID_NOT:
      return {
        ...state,
        duplicateId: {
          status: "ABLE",
        },
      };
    case types.DUPLICATE_ID_YES:
      return {
        ...state,
        duplicateId: {
          status: "UNABLE",
        },
      };

    default:
      return state;
  }
}
