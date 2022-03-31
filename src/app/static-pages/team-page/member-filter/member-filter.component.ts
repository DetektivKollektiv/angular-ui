import { Component, OnInit, Input } from '@angular/core';
import { TagService } from 'src/app/static-pages/team-page/team-page/tag.service';
import { TagInfo } from 'src/app/model/membertags';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.scss']
})
export class MemberFilterComponent implements OnInit {

  @Input() selectedTags: TagInfo[];
  @Input() unselectedTags: TagInfo[];
  unselectedColor= '#DCDCDC';
  isCollapsed = true;
  constructor(public tagService: TagService, private httpClient: HttpClient) { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
  }
}
