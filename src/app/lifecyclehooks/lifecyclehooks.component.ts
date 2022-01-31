import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, OnDestroy ,DoCheck{

  constructor() {
    console.log("hii constructor");
    
   }
  ngDoCheck(): void {
    console.log("messages checked");

  }
  ngOnDestroy(): void {
    console.log("hii Destroy");
    
  }

  ngOnInit(): void {
    console.log("hii oninit");
  }

}
