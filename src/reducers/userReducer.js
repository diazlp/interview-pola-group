import {
  FETCH_USER,
  FETCH_USERS,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  userDetail: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        userDetail: {},
      };

    case FETCH_USER:
      return {
        ...state,
        userDetail: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;
