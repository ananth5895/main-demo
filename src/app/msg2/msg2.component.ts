import { Component, OnInit } from '@angular/core';
import { SermsgService } from '../sermsg.service';

@Component({
  selector: 'app-msg2',
  templateUrl: './msg2.component.html',
  styleUrls: ['./msg2.component.css']
})
export class Msg2Component implements OnInit {

  constructor(private ser: SermsgService) { }

  ngOnInit(): void {
    
    this.recmsg = this.ser.megpussing

  }


  recmsg: any = []
  pass(set1: any) {

    // console.log("name is " + set1);
    this.recmsg = this.ser.megsent(set1)
  }



  // myname:any=[]
  // abc(name2: any) {
  //   this.myname=this.ser.megsent(name2)
  // }
}
