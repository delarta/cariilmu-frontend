import axios from "axios";

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
      url: `${url}/category`})
      .then(res => {
        dispatch({
          type: "FETCH_CATEGORY",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};
