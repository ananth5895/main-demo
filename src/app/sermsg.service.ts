import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SermsgService {

  constructor() { }

 megpussing : any=[]
  megsent(name:any){
    
    console.log("hii hello");
    this.megpussing.push(name)
    return this.megpussing

    
    
  }





  //array
  // pushmes:any=[]

  // megsent(fail:any){
  //    console.log("wesit the message");
  //    this.pushmes.push(fail)
  //    return this.pushmes
  // }

}
