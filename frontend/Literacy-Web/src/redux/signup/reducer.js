/* REGISTER */
import * as types from "./types";

const initialState = {
  register: {
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

    default:
      return state;
  }
}
