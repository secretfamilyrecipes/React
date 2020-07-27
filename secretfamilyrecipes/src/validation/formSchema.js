import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .required("Username is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  termsOfService: yup.bool().oneOf([true], "Field must be checked"),
});
export default formSchema;
