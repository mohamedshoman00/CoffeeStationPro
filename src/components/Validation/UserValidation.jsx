import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
});
export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required(`first name is required`),
  lastName: yup.string().required(`last name is required`),
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
});
