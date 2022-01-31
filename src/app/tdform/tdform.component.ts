import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {
//  xyz=new Ngform(); 
  constructor() { }


  onSubmit(mydata:any){
    console.log(mydata)
  }

  ngOnInit(): void {
  }
  // onsumbit(data:any){
  //   console.log("data value :" + data);
    
  // }




}
