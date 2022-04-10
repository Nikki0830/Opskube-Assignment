import { SET_BOOKS } from "./actionTypes/bookActionTypes";

const initialState = {
  totelBooks: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      return { ...state, totelBooks: payload };
    default:
      return state;
  }
};
