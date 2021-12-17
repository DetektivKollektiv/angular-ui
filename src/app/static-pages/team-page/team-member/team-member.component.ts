import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
//import { TeamPageComponent } from '../team-page/team-page.component';
import tagsData from 'src/assets/data/membertags.json';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service'

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

export class TeamMemberComponent implements OnInit, OnChanges {
 
  @Input() MEM;
  displayStatus: boolean;
  constructor(public tagService: TagService) {
    this.displayStatus = true;
   }
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
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    const displayS = changes ['displayStatus'];
    for( var tag in this.MEM.tags){
      if(tag in this.tagService.selected_tags){
        this.displayStatus=true;
      }
    }this.displayStatus=false;
  }
}


