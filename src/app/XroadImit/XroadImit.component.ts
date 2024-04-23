import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'xroadimit-component',
  templateUrl: './XroadImit.component.html',
  styleUrls: ['./XroadImit.component.scss']
})
export class XroadImitComponent {
  


  numberValue = 0.30;
  numberValue2 = 0.30;
  numberValue3 = 0.40;

  numberValuem = 0.20;
  numberValuem2 = 0.10;
  numberValuem3 = 0.70;

  efektMadal() {
    localStorage.setItem("efektMadal", JSON.stringify(this.numberValue));
  }

  efektKeskmine() {
    localStorage.setItem("efektKeskmine", JSON.stringify(this.numberValue2));
  }

  efektKorge() {
    localStorage.setItem("efektKorge", JSON.stringify(this.numberValue3));
  }

  makseMadal() {
    localStorage.setItem("makseMadal", JSON.stringify(this.numberValuem));
  }

  makseKeskmine() {
    localStorage.setItem("makseKeskmine", JSON.stringify(this.numberValuem2));
  }

  makseKorge() {
    localStorage.setItem("makseKorge", JSON.stringify(this.numberValuem3));
  }
  
}