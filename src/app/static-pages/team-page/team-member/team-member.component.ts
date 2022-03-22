import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service';
import { TagInfo } from 'src/app/model/membertags';
import { Member } from 'src/app/model/member';
@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})

export class TeamMemberComponent implements OnInit {
  @Input() member: Member;
  displayStatus: boolean;
  allTags: TagInfo[] = [];
  constructor(public tagService: TagService) {
    this.displayStatus = true;
  }
  ngOnInit(): void {
    this.member.tags.forEach(element => {
      const tagobject = this.tagService.allTags.find(tag => tag.id === element);
      console.log(tagobject);
      this.allTags.push(tagobject);
    });
  }
}


