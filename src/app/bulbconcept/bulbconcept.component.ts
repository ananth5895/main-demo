import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbconcept',
  templateUrl: './bulbconcept.component.html',
  styleUrls: ['./bulbconcept.component.css']
})
export class BulbconceptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  change!: boolean;
 bulbnf(){
 this.change =!this.change
}

}
