import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent implements OnInit {

  isShownBtn = true;
  isShownText = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBtn() {
    this.isShownText = true;
    this.isShownBtn = false;
  }
}
