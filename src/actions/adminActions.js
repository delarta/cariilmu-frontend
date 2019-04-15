import axios from "axios";

const url = "https://cari-ilmu-test.herokuapp.com";

export const signIn = (email, password) => {
  return dispatch => {
    axios
      .post(`${url}/admin/sign-in`, {
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
      url: `${url}/admin/class`,
      headers: { Authorization: localStorage.getItem("token") }
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

export const deleteClass = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/admin/class/${id}`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res)
        dispatch({
          type: "DELETE_CLASS_ADMIN",
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

export const editCategory = (id, name, photo) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.append("photo", photo);    

    axios({
      method: "put",
      url: `${url}/admin/category/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      },
      data: bodyFormData
    })
      .then(res => {
        getMentors()
        console.log(res)
        dispatch({
          type: "EDIT_CATEGORY_ADMIN",
          payload: {
            _id : id,
            name,
            photo
          }
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const verifyMentor = (id) => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/admin/mentor/${id}/verify`,
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        console.log(res)
        dispatch({
          type: "VERIFY_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};


export const deleteMentor = id => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/admin/mentor/${id}`,
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res)
      dispatch({
        type: "DELETE_MENTOR",
        payload: res.data.data
      });
    })
  };
};
