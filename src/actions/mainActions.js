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

// export const getMentors = () => {
//   return dispatch => {
//     axios({
//       method: "get",
//       url: `${url}/mentor`
//     })
//       .then(res => {
//         dispatch({
//           type: "FETCH_MENTOR_ADMIN",
//           payload: res.data.data
//         });
//       })
//       .catch(err => console.log(err.response));
//   };
// };

// export const getCategories = () => {
//   return dispatch => {
//     axios({
//       method: "get",
//       url: `${url}/category`,
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//       .then(res => {
//         dispatch({
//           type: "FETCH_CATEGORY_ADMIN",
//           payload: res.data.data
//         });
//       })
//       .catch(err => console.log(err.response));
//   };
// };
