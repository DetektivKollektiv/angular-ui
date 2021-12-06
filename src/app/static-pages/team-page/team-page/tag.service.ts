import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  selected_tags = [1,2]

  constructor() { }


  unselect_tag(int){
    
  }
  select_tag(int){
    
  }
 
}

 /**
   * inaktive Filter = erst einmal alle Tags 
   * aktive Filter sind nur die ausgewählten 
   * selected_tags geben die Filterung vor wo selected_tag == tag aus Member
   */