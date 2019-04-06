
import axios from "axios";

const url = "https://cari-ilmu-test.herokuapp.com";

export const signIn = (email, password) => {
  return dispatch => {
    axios
      .post(`${url}/student/sign-in`, {
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
      .post(`${url}/student/sign-up`, {
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
