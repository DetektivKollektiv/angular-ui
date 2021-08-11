import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-experience-bubble',
  templateUrl: './user-experience-bubble.component.html',
  styleUrls: ['./user-experience-bubble.component.scss'],
  inputs: ['iconName','color','text', 'subText','gridColor']
})
export class UserExperienceBubbleComponent implements OnInit {
  iconName: string;
  color: string;
  text: string;
  subText: string;
  gridColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
