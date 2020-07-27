import * as yup from 'yup'

const loginchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Password is Required"),
  firstName: yup
    .string()
    .min(3, "First Name must be at least 3 characters")
    .required("Username is Required"),
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters"),
  email: yup
    .string()
    .min(3, "First Name must be at least 3 characters")
    .email()
    .required("Email is Required"),
  termAndConditions: yup
    .boolean()
    .required("You must agree to the terms and conditions"),

})

export default loginchema
