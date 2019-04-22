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
          .post(`${url}/student/sign-in`, {
            email: email,
            password: password
          })
          .then(res => {
            MySwal.fire({
              title: "You are Signed In!",
              type: "success",
              timer: 1500
            });
            dispatch({
              type: "SIGN_IN",
              email,
              password,
              response: res.data
            });
          })
          .catch(err => {
            console.log(err.response);
            MySwal.fire({
              title: "Sign In Failed",
              text: err.response.data.message,
              type: "error",
              timer: 2000
            });
          });
      }
    });
  };
};

export const signUp = (name, username, email, password, redirectOnSuccess) => {
  return dispatch => {
    MySwal.fire({
      title: "Please Wait",
      timer: 2000,
      toast: true,
      onBeforeOpen: () => {
        MySwal.showLoading();
        return axios
          .post(`${url}/student/sign-up`, {
            name,
            username,
            email,
            password
          })
          .then(res => {
            MySwal.fire({
              title: "You Are Signed Up!",
              type: "success",
              timer: 1500
            });
            redirectOnSuccess();
            dispatch({
              type: "SIGN_UP",
              name,
              username,
              email,
              password
            });
          })
          .catch(err => {
            MySwal.fire({
              title: "Sign Up Failed",
              text: err.response.data.message,
              type: "error"
            });
            console.log(err.response);
          });
      }
    });
  };
};

export const getStudentData = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student`,
      headers: { Authorization: sessionStorage.getItem("token") }
    })
      .then(res => {
        console.log(res);
        dispatch({
          type: "FETCH_STUDENT_DATA",
          payload: res.data.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};



export const getCart = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/payment`,
      headers: { Authorization: sessionStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_CART",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const enroll = (classid) => {
  console.log('from thunk',classid)
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/student/class/${classid.classId}/enroll`,
      headers: { Authorization: sessionStorage.getItem("token") }

    })
      .then(res => {
        console.log("berhasil")
        dispatch({
          type: "ENROLL_CLASS",
          payload: res.data.data
          
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const confirmPayment = (classid, photo) => { 
  console.log('from thunk',classid)
  console.log('photo', photo)
  return dispatch => {
    let bodyFormData = new FormData();

    bodyFormData.append("photo", photo);

    axios({
      method: "put",
      url: `${url}/student/payment/${classid}/confirm`,
      headers: { Authorization: sessionStorage.getItem("token"),
      "Content-Type": "multipart/form-data"
    },

      data: bodyFormData

    })
      .then(res => {
        console.log("berhasil")
        dispatch({
          type: "CONFIRM_PAYMENT",
          payload : res.data.data
          
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getSchedule = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/class`,
      headers: { Authorization: sessionStorage.getItem("token") }
    })
      .then(res => {
        dispatch({
          type: "FETCH_SCHEDULE",
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};