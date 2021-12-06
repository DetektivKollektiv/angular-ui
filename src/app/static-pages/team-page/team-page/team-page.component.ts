import { Component, OnInit } from '@angular/core';

import teamData from 'src/assets/data/member.json';
import tagsData from 'src/assets/data/membertags.json';


interface Member {
  image: String;
  name: String;
  text: String;
  linkL: String;
  linkM: String;
  tags: number[];
}
interface TagInfo {
  id: number;
  tagname: String;
  color: String;
}

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {


  constructor() { }
  members: Member[] = teamData;
  tagsInfo: TagInfo[] = tagsData;

  ngOnInit(): void {}

}
