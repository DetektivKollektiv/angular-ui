import { Component, OnInit } from '@angular/core';
import { input } from 'aws-amplify';

@Component({
  selector: 'app-user-experience-bubble-list',
  templateUrl: './user-experience-bubble-list.component.html',
  styleUrls: ['./user-experience-bubble-list.component.scss'],
  inputs : ['userExperienceBubbles']
})
export class UserExperienceBubbleListComponent implements OnInit {
  constructor() { }
  public userExperienceBubbles: any[];

  ngOnInit(): void {
  }

}
