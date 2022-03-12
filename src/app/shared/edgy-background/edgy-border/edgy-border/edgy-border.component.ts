import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edgy-border',
  templateUrl: './edgy-border.component.html',
  styleUrls: ['./edgy-border.component.scss']
})
export class EdgyBorderComponent implements OnInit {

  @Input() bottomSection = false;

  constructor() { }

  ngOnInit(): void {
  }

}
