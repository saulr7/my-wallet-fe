export default interface SignUpModel {
    email           :string;
    firstName       :string;
    lastaName       :string;
    password        : string;
    confirmPassword : string;
    uid?            :string;
}