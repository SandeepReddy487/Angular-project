import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
public ads='assets/nike.png';
public bulb='assets/bulboff.png';

public Add1(){
  this.ads='assets/lee.png';
}

public Add2(){
  this.ads='assets/nike.png';
}


public ON(){
this.bulb='assets/bulbon.png';
}
public OFF(){
this.bulb='assets/bulboff.png';
}
}