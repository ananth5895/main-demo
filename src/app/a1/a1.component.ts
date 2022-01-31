import { Component, OnInit } from '@angular/core';
// import { debugPort } from 'process';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(private ananth:S1Service) { }

  ngOnInit(): void {
  }
 
  // abc(name:any){
  //   // console.log("this abc function" + name)

  //   this.myvar.commonmethod();

    
  // }


  small(){
    this.ananth.dp();
  }

}
