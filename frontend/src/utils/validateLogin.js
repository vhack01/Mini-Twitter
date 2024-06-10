const validateLogin = ({ username, password }) => {
  username = username.trim();
  password = password.trim();

  if (username.length === 0 || password.length === 0) {
    return "Field is required";
  }

  return null;
};

export default validateLogin;
