import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  
  onsubmit(form:any){
    console.log(form);

  }
  ngOnInit(): void {
  }

    
  

}
