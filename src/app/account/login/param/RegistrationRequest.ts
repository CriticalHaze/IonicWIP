export class RegistrationRequest{
    firstname: String;
    lastname: String;
    mobile: String;
    email: String;
    password: String;

    constructor(firstname: String,
        lastname: String,
        mobile: String,
        email: String,
        password: String){
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.mobile = mobile;
            this.email = email;
            this.password = password;

    }
}