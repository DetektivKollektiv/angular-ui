import { Injectable, Input } from '@angular/core';
import { TagInfo } from 'src/app/model/membertags';
import { Member } from 'src/app/model/member';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  allTags: TagInfo[] = [];
  resetTags: TagInfo[] = [];
  membersToDisplay: Member[] = [];
  allMembers: Member[] = [];
  selectedTags: TagInfo[] = [];
  unselectedTags: TagInfo[] = [];

  private memberurl = 'assets/data/member.json';
  private tagurl = 'assets/data/membertags.json';

  constructor(
    private http: HttpClient,
  ) {
    this.showMember();
  }
  showMember(){
    this.http.get<Member[]>(this.memberurl).subscribe(data => this.allMembers = data);
    this.http.get<TagInfo[]>(this.tagurl).subscribe(data => {
      this.unselectedTags = [...data];
      this.allTags = [...data];
      this.updateMember();
    });
    this.selectedTags = [];
  }
  updateMember() {
    if(this.selectedTags.length === 0){
      this.membersToDisplay = this.allMembers;
    }
    else {
    this.membersToDisplay = this.allMembers.filter(member => member.tags.some(
      tag => this.selectedTags.some(selectedtag => selectedtag.id === tag)));
    }
  }
  select_tag(int) {
    if(this.unselectedTags.length === 0){
      this.unselectedTags = this.allTags;
    }
    this.selectedTags.push(int);
    const index = this.unselectedTags.indexOf(int);
    this.unselectedTags.splice(index, 1);
    this.updateMember();
  }
  unselect_tag(int) {
    this.unselectedTags.push(int);
    const index = this.selectedTags.indexOf(int);
    this.selectedTags.splice(index, 1);
    this.updateMember();
  }
}
