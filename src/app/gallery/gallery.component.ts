import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // addimage ="../asse"

  addimage = '../../assets/images/lo.jpg';


name ="";
setValue(){
  this.name = 'ananth';
}

  sendData(){
    // alert("hiii") 
    console.log('hiii');
    
  }
}
