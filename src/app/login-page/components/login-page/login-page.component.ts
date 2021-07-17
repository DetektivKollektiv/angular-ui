import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent implements OnInit {
  cases:any;
  constructor(
  ) {

  }

  ngOnInit(): void {

    this.cases = [
      {
        counter: '87',
        serial_numer: '#9817421109',
        date1:'01.01.0001',
        date2:'02.01.0001',
        number:34
      },
      {
        counter: '13',
        serial_numer: '#9817421688',
        date1:'01.01.0001',
        date2:'02.01.0001',
        number:34
      },
      {
        counter: '02',
        serial_numer: '#9817421656',
        date1:'01.01.0001',
        date2:'02.01.0001',
        number:34
      },
      {
        counter: '53',
        serial_numer: '#9817421432',
        date1:'01.01.0001',
        date2:'02.01.0001',
        number:53
      }
    ];

    console.log(this.cases);
  }
}
