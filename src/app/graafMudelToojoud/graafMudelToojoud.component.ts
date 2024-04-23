import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graafmudeltoojoud',
  templateUrl: './graafMudelToojoud.component.html',
  styleUrls: [ './graafMudelToojoud.component.scss' ]
})
export class GraafMudelToojoudComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: '',
        left: 'center',
        top: 'center'
      },
      color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 5,
              name: 'Madal'
            },
            {
              value: 5,
              name: 'Keskmine'
            },
            {
              value: 90,
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}