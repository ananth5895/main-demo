import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
  firstname=""
  lastname=""
  email=""
  phone=""
  password=""
  confirmPassword=""
  user()                                                                                                                                                                                                                                                                                     {
    localStorage.setItem("firstname", this.firstname);
    localStorage.setItem("lastname", this.lastname);
    localStorage.setItem("email", this.email);
    localStorage.setItem("phone", this.phone);
    localStorage.setItem("password", this.password);
    localStorage.setItem("confirmpassword", this.confirmPassword);
  }

  // user(name: string, pass: string) {
  //   alert(name + ':' + pass)

  // }
  // myusername: any
  // myimage = "../../assets/images/download.jfif"

}
