import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor(private kabilan:S1Service) { }

  ngOnInit(): void {
  }

  big(){
 this.kabilan.dp();
  }
}
