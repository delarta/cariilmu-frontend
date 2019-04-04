import axios from "axios";
export const signIn = (email, password) => {
  return dispatch => {
    axios
      .post("https://cari-ilmu.herokuapp.com/admin/sign-in", {
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
  return {
    type: "SIGN_UP",
    name,
    username,
    email,
    password
  };
};

export const delClass = id => {
  return {
    type: "DELETE_CLASS",
    id
  };
};
