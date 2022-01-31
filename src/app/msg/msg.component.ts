import { Component, OnInit } from '@angular/core';
import { SermsgService } from '../sermsg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  constructor(private ser:SermsgService) { }

  ngOnInit(): void {
 this.arrmsg = this.ser.megpussing

  }

 arrmsg:any=[]
  pass(set1:any){

    // console.log("name is " + set1);
    this.arrmsg = this.ser.megsent(set1)  
  }

}
