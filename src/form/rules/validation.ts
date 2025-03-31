import * as yup from "yup";

export const loginFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email address")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

export const individualCaptureForm1ValidationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be at most 15 digits"),
  bvn: yup.string().required("BVN is required"),
  gender: yup.string().required("gender is required"),
});

export const individualCaptureForm2ValidationSchema = yup.object().shape({
  email_address: yup
    .string()
    .email("Invalid email format") // Validates email format
    .required("Email is required"),
  username: yup.string().required("username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long") // Optional: Minimum length requirement
    .required("Password is required"), // Ensures the password field is required

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match") // Confirms that the password matches
    .required("Confirm password is required"),
});

export const corporateCaptureForm1ValidationSchema = yup.object().shape({
  company_name: yup.string().required("company name is required"),
  company_email_address: yup
    .string()
    .email("Invalid email format") // Validates email format
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long") // Optional: Minimum length requirement
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match") // Confirms that the password matches
    .required("Confirm password is required"),
});

export const corporateCaptureForm2ValidationSchema = yup.object().shape({
  about_company: yup.string().required("please tell us about your company"),
  company_phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be at most 15 digits"),
  company_address: yup.string().required("please tell us about your company"),
  bvn: yup.string().required("bvn is required"),
});
