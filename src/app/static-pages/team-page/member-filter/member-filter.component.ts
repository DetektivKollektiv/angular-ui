import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.scss']
})
export class MemberFilterComponent implements OnInit {
  
  @Input() TAG;
  isCollapsed : boolean = false;  //umsetzen auf true!
  tagColor = 'TAG.color';
  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
