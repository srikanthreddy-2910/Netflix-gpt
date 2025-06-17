export const validation = (email, password ) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email.trim()
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password.trim()
  );

  const errorMessage = {
    emailError: isEmailValid ? null : "Email Id is not valid",
    passwordError: isPasswordValid ? null : "Password is not valid",
  };

  return errorMessage;
};