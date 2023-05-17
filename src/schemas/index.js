import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("You need to enter your email"),

    age: yup.number().required("You need to enter your age"),

  password: yup
    .string()
    .min(5, "Your password must be at least 5 characters")
    .matches(passwordRules, {
      message:
        "You must use at least one uppercase letter, one lowercase letter, and one number",
    })
    .required("You need to enter your password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("You need to enter your confirm password"),
});


export const advencedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3,"Your username must be at least 5 characters")
    .required("You need to enter your username"),

    university: yup.string().oneOf(["KDG","UCLL"],"please select your university").required("You need to select your university"),

    isAccepted : yup
    .boolean().oneOf([true],"please accept the terms of use"),


});