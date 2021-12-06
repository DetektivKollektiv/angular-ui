import { Component, OnInit, Input} from '@angular/core';
//import { TeamPageComponent } from '../team-page/team-page.component';
import tagsData from 'src/assets/data/membertags.json';

interface TagInfo {
  id: number;
  tagname: String;
  color: String;
}
@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})

export class TeamMemberComponent implements OnInit {
 
  @Input() MEM;
 
  constructor() { }
  tagsInfo: TagInfo[] = tagsData;
  allTags: any[] = [];

  ngOnInit(): void {

   this.MEM["tags"].forEach(element => {
    var tagobject = this.tagsInfo.filter((tag) => {
      if(tag.id == element){
        return tag
      }
    })
      this.allTags.push(tagobject[0])
   });
  }
}


