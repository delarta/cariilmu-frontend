import axios from "axios";

const url = "https://cari-ilmu-test.herokuapp.com";

export const signIn = (email, password) => {
  return dispatch => {
    axios
      .post(`${url}/mentor/sign-in`, {
        email: email,
        password: password
      })
      .then(res => {
        console.log(res);

        dispatch({
          type: "SIGN_IN",
          email,
          password,
          response: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export const signUp = (name, username, email, password) => {
  return dispatch => {
    axios
      .post(`${url}/mentor/sign-up`, {
        name,
        username,
        email,
        password
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "SIGN_UP",
          name,
          username,
          email,
          password
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export const getMentor = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor/`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res.data.data);
        dispatch({
          type: "FETCH_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const setFinishedClass = id => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/mentor/class/${id}/finish`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res.data.data);
        dispatch({
          type: "FINISH_CLASS_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getClass = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor/class`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res);
        dispatch({
          type: "FETCH_CLASS",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const addClass = (name, info, schedule, fee) => {
  return dispatch => {
    axios({
      method: "post",
      url: `${url}/mentor/class`,
      headers: { Authorization: localStorage.getItem("token") },
      data: {
        name,
        info,
        schedule,
        fee
      }
    })
      .then(res => {
        console.log(res);
        dispatch({
          type: "ADD_CLASS_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};
