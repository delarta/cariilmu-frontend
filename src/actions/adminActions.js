import axios from "axios";

const url = "https://cari-ilmu-test.herokuapp.com";

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

export const getClass = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/class`,
      // headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_CLASS_ADMIN",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getStudents = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/admin/student`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_STUDENT_ADMIN",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getMentors = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/admin/mentor`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_MENTOR_ADMIN",
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
      url: `${url}/admin/category`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_CATEGORY_ADMIN",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};


export const delClass = id => {
  return {
    type: "DELETE_CLASS",
    id
  };
};
