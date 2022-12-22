import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface RequirementComponent {
  headline1: string;
  headline2: string;
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-teacher-requirement-item',
  templateUrl: './teacher-requirement.item.component.html',
  styleUrls: ['./teacher-requirement.item.component.scss']
})


export class TeacherRequirementItemComponent implements OnInit {
  @Input() item: RequirementComponent;

  components: RequirementComponent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
