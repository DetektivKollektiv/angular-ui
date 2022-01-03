import { Injectable } from '@angular/core';
import tagsData from 'src/assets/data/membertags.json';

import {TagInfo} from 'src/app/model/membertags';

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
    const index = this.unselected_tags.indexOf(int);
    this.unselected_tags.splice(index, 1);
  }
  unselect_tag(int){
    this.unselected_tags.push(int);
    const index = this.selected_tags.indexOf(int);
    this.selected_tags.splice(index, 1);
  }

}
