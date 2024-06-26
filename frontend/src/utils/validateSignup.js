const validateSignup = ({ name, username, email, password }) => {
  name = name.trim();
  username = username.trim();
  email = email.trim();
  password = password.trim();

  if (
    name.length === 0 ||
    username.length === 0 ||
    email.length === 0 ||
    password.length === 0
  ) {
    return "Empty field is not allowed";
  }
  return null;
};

export default validateSignup;
