export type loginFormTypes = {
  email: string;
  password: string;
};

export type individualCaptureForm1Types = {
  first_name: string;
  last_name: string;
  phone_number: string;
  bvn: string;
  gender: string;
};

export type individualCaptureForm2Types = {
  email_address: string;
  username: string;
  password: string;
  confirm_password: string;
};

export type corporateCaptureForm1Types = {
  company_name: string;
  company_email_address: string;
  password: string;
  confirm_password: string;
};

export type corporateCaptureForm2Types = {
  about_company: string;
  company_phone_number: string;
  company_address: string;
  bvn: string;
};
