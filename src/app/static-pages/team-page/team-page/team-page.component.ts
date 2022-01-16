import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';

import {Member} from 'src/app/model/member';
import {TagInfo} from 'src/app/model/membertags';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  members: Member[] = [];
  tagsInfo: TagInfo[];

  constructor(public tagService: TagService, private httpClient: HttpClient) { }

  ngOnInit(): void {
     this.httpClient.get<TagInfo[]>('assets/data/membertags.json').subscribe(data =>{
      this.tagsInfo = data;
    });
    this.httpClient.get<Member[]>('assets/data/member.json').subscribe(data =>{
      this.members = data;
    });

  }

}
