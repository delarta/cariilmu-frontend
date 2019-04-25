import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const url = "https://cari-ilmu-test.herokuapp.com";

export const signIn = (email, password) => {
  return dispatch => {
    MySwal.fire({
      title: "Please Wait",
      timer: 2000,
      toast: true,
      onBeforeOpen: () => {
        MySwal.showLoading();
        return axios
          .post(`${url}/mentor/sign-in`, {
            email: email,
            password: password
          })
          .then(res => {
            MySwal.fire({
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
            MySwal.fire({
              title: "Sign In Failed !",
              text: err.response.data.message,
              type: "error"
            });
            console.log(err.response);
          });
      }
    });
  };
};

export const signUp = (name, username, email, password, redirectOnSuccess) => {
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
        redirectOnSuccess();
        dispatch({
          type: "SIGN_UP"
        });
      })
      .catch(err => {
        Swal.fire({
          title: "Signed Up Failed",
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
      headers: { Authorization: sessionStorage.getItem("token") }
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
      headers: { Authorization: sessionStorage.getItem("token") }
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
      headers: { Authorization: sessionStorage.getItem("token") }
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

export const addClass = (
  name,
  info,
  schedule,
  fee,
  category,
  image,
  startTime,
  endTime
) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.set("info", info);
    bodyFormData.set("schedule", schedule);
    bodyFormData.set("fee", fee);
    bodyFormData.set("category", category._id);
    bodyFormData.set("startTime", startTime);
    bodyFormData.set("endTime", endTime);
    bodyFormData.append("image", image);

    MySwal.fire({
      title: "Please Wait",
      timer: 2000,
      toast: true,
      onBeforeOpen: () => {
        MySwal.showLoading();
        return axios({
          method: "post",
          url: `${url}/mentor/class`,
          headers: {
            Authorization: sessionStorage.getItem("token"),
            "Content-Type": "multipart/form-data"
          },
          data: bodyFormData
        })
          .then(res => {
            MySwal.fire({
              title: "Class Created",
              timer: 1500,
              type: "success"
            });
            dispatch({
              type: "ADD_CLASS_MENTOR",
              payload: res.data.data
            });
          })
          .catch(err => {
            console.log(err.response);
            MySwal.fire({
              title: "Class Creation Failed !",
              text: err.response.data.message,
              type: "error"
            });
          });
      }
    });
  };
};

export const editClass = (
  id,
  name,
  info,
  schedule,
  category,
  image,
  startTime,
  endTime
) => {
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.set("name", name);
    bodyFormData.set("info", info);
    bodyFormData.set("schedule", schedule);
    bodyFormData.set("category", category._id);
    bodyFormData.set("startTime", startTime);
    bodyFormData.set("endTime", endTime);
    bodyFormData.append("image", image);

    axios({
      method: "put",
      url: `${url}/mentor/class/${id}`,
      headers: {
        Authorization: sessionStorage.getItem("token"),
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
          payload: res.data.data
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
    if (certificate !== null) {
      bodyFormData.append("certificate", certificate);
    }

    axios({
      method: "put",
      url: `${url}/mentor`,
      headers: {
        Authorization: sessionStorage.getItem("token"),
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
        dispatch({
          type: "EDIT_MENTOR_PROFILE",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getPayment = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor/balance`,
      headers: { Authorization: sessionStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_PAYMENT_MENTOR",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};
