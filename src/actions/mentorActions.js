import axios from "axios";
import Swal from "sweetalert2";

const url = "https://cari-ilmu-test.herokuapp.com";

export const signIn = (email, password) => {
  return dispatch => {
    axios
      .post(`${url}/mentor/sign-in`, {
        email: email,
        password: password
      })
      .then(res => {
        Swal.fire({
          title: "Signed In",
          timer: 1500,
          type: "success",
          text: `Welcome, ${res.data.data.name}`
        });
        dispatch({
          type: "SIGN_IN",
          email,
          password,
          response: res.data
        });
      })
      .catch(err => {
        Swal.fire({
          title: "Wrong Username or Password",
          type: "error"
        });
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
        Swal.fire({
          title: "Signed Up",
          timer: 1000,
          text: "please sign in",
          type: "success"
        });
        this.props.history.push("/signin-mentor");
        dispatch({
          type: "SIGN_UP"
        });
      })
      .catch(err => {
        Swal.fire({
          title: "Signed Up Failed",
          text: err.response.data.message,
          type: "error"
        });
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
        dispatch({
          type: "FETCH_CLASS_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const addClass = (name, info, schedule, fee, category) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.set("info", info);
    bodyFormData.set("schedule", schedule);
    bodyFormData.set("fee", fee);
    bodyFormData.set("category", category);

    axios({
      method: "post",
      url: `${url}/mentor/class`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      },
      data: bodyFormData
    })
      .then(res => {
        dispatch({
          type: "ADD_CLASS_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const editClass = (id, name, info, schedule, category) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.set("info", info);
    bodyFormData.set("schedule", schedule);
    bodyFormData.set("category", category._id);

    axios({
      method: "put",
      url: `${url}/mentor/class/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      },
      data: bodyFormData
    })
      .then(res => {
        Swal.fire({
          title: "Class Edited!",
          timer: 1000,
          type: "success"
        });
        dispatch({
          type: "EDIT_CLASS_MENTOR",
          payload: {
            id,
            name,
            info,
            schedule,
            category
          }
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const editProfile = (
  id,
  name,
  bio,
  birthday,
  photo,
  eKtp,
  ektpNumber,
  certificate
) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.set("bio", bio);
    bodyFormData.set("birthday", birthday);
    bodyFormData.set("ektpNumber", ektpNumber);
    bodyFormData.append("photo", photo);
    bodyFormData.append("ektp", eKtp);
    bodyFormData.append("certificate", certificate);

    axios({
      method: "put",
      url: `${url}/mentor`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      },
      data: bodyFormData
    })
      .then(res => {
        Swal.fire({
          title: "Profile Edited!",
          timer: 1000,
          type: "success"
        });
        console.log(res);
        dispatch({
          type: "EDIT_MENTOR_PROFILE",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};
