import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from './model/member';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public members: Member[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/team.json').subscribe((members: Member[]) => {
      this.members = members;
    });
  }

}
