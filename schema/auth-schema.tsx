import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .test("email-or-username", "Invalid email or username", (value) => {
      if (!value) return false;
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    })
    .required("Email or Username Anyone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  betaCode: Yup.string().required("Beta Code is required"),
});
