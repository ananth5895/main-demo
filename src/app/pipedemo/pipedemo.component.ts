import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {



  str:string="this is interpolation method"
  d1=new Date();
  amount:number=123456
  emp={'name':"ananth",'age':21}

  constructor() { }

  ngOnInit(): void {
  }

}
