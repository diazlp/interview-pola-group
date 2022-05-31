import axios from "axios";
import {
  FETCH_USERS,
  FETCH_USER,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from "./actionTypes";

export const fetchUsers = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  dispatch({
    type: FETCH_USERS,
    payload: data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const deleteUser = (id) => async (dispatch) => {
  console.log(id);
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({
    type: DELETE_USER,
    payload: id,
  });
};
