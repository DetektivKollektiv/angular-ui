import { Injectable } from '@angular/core';
import tagsData from 'src/assets/data/membertags.json'

interface TagInfo{
  id: number;
  tagname: String; 
  color: String; 
}
@Injectable({
  providedIn: 'root'
})
export class TagService {

  selected_tags = [];
  unselected_tags = [];

  tagsInfo: TagInfo[] = tagsData;

  constructor() {
    this.selected_tags = this.tagsInfo;
   }

  select_tag(int){
    this.selected_tags.push(int);
    var index = this.unselected_tags.indexOf(int);
    this.unselected_tags.splice(index, 1);
  }
  unselect_tag(int){
    this.selected_tags.push(int);
    var index = this.selected_tags.indexOf(int);
    this.selected_tags.splice(index, 1);
  }
 
}

 /**
   * inaktive Filter = erst einmal alle Tags 
   * aktive Filter sind nur die ausgewählten 
   * selected_tags geben die Filterung vor wo selected_tag == tag aus Member
   */