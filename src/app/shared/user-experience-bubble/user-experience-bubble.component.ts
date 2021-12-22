import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-experience-bubble',
  templateUrl: './user-experience-bubble.component.html',
  styleUrls: ['./user-experience-bubble.component.scss'],
})
export class UserExperienceBubbleComponent implements OnInit {
  @Input() iconName: string;
  @Input() color: string;
  @Input() text: string;
  @Input() subText: string;
  @Input() gridColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
