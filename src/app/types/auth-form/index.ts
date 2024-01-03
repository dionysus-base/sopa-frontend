enum Role {
  "Customer" = "0",
  "Seller" = "1",
  "Admin" = "2",
}

type Roles = Role.Customer | Role.Seller | Role.Admin;

export interface SignupFormInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmedPassword: string;
  role: Roles;
}

export interface SigninFormInput
  extends Pick<SignupFormInput, "email" | "password"> {}

export interface EmailVerification extends Omit<SigninFormInput, "password"> {}

export interface ChangePassword
  extends Pick<SignupFormInput, "email" | "password"> {
  newPassword: string;
}

export interface ChangeEmail
  extends Pick<SignupFormInput, "email" | "password"> {
  newEmail: string;
}
