import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';
import { TagInfo } from 'src/app/model/membertags';
import { Member } from 'src/app/model/member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { updateLocale } from 'moment';
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {

  constructor(public tagService: TagService) { }

}
