import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service';
import { TagInfo } from 'src/app/model/membertags';
import { Member } from 'src/app/model/member';
@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})

export class TeamMemberComponent implements OnInit, OnChanges {

  @Input() member: Member;
  @Input() membertag: TagInfo[];

  displayStatus: boolean;
  allTags: TagInfo[] = [];
  constructor(public tagService: TagService) {
    this.displayStatus = true;
  }
  ngOnInit(): void {
    console.log(this.membertag);
    this.member.tags.forEach(element => {
      const tagobject = this.membertag.find(tag => tag.id === element);
      this.allTags.push(tagobject);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const displayS = changes.displayStatus;
    for (const tag in this.member.tags) {
      if (tag in this.tagService.selected_tags) {
        this.displayStatus = true;
      }
    } this.displayStatus = false;
  }
}


