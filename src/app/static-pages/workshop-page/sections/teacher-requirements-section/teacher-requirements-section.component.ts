import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-teacher-requirements-section',
  templateUrl: './teacher-requirements-section.component.html',
  styleUrls: ['./teacher-requirements-section.component.scss']
})
export class TeacherRequirementsSectionComponent implements OnInit {

  @Input() json: string;
  reqs: any = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('assets/data/' + this.json).subscribe(data => {
      this.reqs = data;
    });

  }
}
