import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .max(12, "password must not be more than 12 characters")
    .required("password is required"),
});
export const registerSchema = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .max(12, "password must not be more than 12 characters")
    .required("password is required"),
});
