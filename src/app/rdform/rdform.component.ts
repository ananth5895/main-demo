import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdform',
  templateUrl: './rdform.component.html',
  styleUrls: ['./rdform.component.css']
})
export class RDFormComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    pswd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ftname: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  onSubmit(mydata: any) {
    console.log(mydata)
  }
  get email() {
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }
}
