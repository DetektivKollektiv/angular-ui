import { Component, OnInit, Input } from '@angular/core';
import { TagInfo } from 'src/app/model/membertags';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service';

@Component({
  selector: 'app-member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.scss']
})
export class MemberFilterComponent implements OnInit {

  @Input() membertag: TagInfo[];
  isCollapsed = true;
  tagColor = 'membertag.color';
  constructor(public tagService: TagService) {}

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
  }
}
