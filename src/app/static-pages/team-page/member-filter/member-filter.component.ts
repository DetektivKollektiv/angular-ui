import { Component, OnInit, Input } from '@angular/core';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service'

@Component({
  selector: 'app-member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.scss']
})
export class MemberFilterComponent implements OnInit {
  
  @Input() TAG;
  isCollapsed : boolean = false;  //umsetzen auf true!
  tagColor = 'TAG.color';
  constructor(public tagService: TagService) {}

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
