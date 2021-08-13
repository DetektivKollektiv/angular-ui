import { Component, Input, OnInit } from '@angular/core';
import { input } from 'aws-amplify';

@Component({
  selector: 'app-user-experience-bubble-list',
  templateUrl: './user-experience-bubble-list.component.html',
  styleUrls: ['./user-experience-bubble-list.component.scss'],
})
export class UserExperienceBubbleListComponent implements OnInit {
  @Input() public userExperienceBubbles: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
