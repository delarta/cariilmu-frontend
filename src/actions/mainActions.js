import axios from "axios";
import Swal from "sweetalert2";

const url = "https://cari-ilmu-test.herokuapp.com";

export const getRole = () => {
  return {
    type: "FETCH_ROLE"
  };
};

export const getClass = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/class`
    })
      .then(res => {
        dispatch({
          type: "FETCH_CLASS",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getCategories = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/category`
    })
      .then(res => {
        dispatch({
          type: "FETCH_CATEGORY",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const signOut = () => {
  Swal.fire({
    title: "Successfully Signed Out",
    timer: 1000,
    type: "success"
  });
  return {
    type: "SIGN_OUT"
  };
};

