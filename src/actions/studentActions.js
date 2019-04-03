export const signIn = (email, password, response) => {
  return {
    type: "SIGN_IN",
    email,
    password,
    response
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
