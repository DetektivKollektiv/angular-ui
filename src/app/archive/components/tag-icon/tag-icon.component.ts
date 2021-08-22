import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-icon',
  templateUrl: './tag-icon.component.html',
  styleUrls: ['./tag-icon.component.scss'],
})
export class TagIconComponent implements OnInit {
  @Input() tag: any;
  public cssClass: string = "";
  public iconClass: string = "";
  
  constructor() { }

  ngOnInit(): void {


    console.log({zz: this.tag, yy: this.tag.toLowerCase()})

    const lowerCaseTag = this.tag.toLowerCase();
    if(lowerCaseTag === 'kein impressum') {
      this.iconClass = "fas fa-question";
    } else if(lowerCaseTag === 'hatespeech') {
      this.iconClass = "far fa-frown";
    } else if(lowerCaseTag === 'keine quellen') {
      this.iconClass = "fas fa-unlink";
    } else if(lowerCaseTag === 'obama') {
      this.iconClass = "fas fa-unlink";
    }
    
    const specialTags = [ 'hatespeech', 'kein impressum', 'keine quellen','obama' ];
    const specialEmptyStyleTag = specialTags.indexOf(lowerCaseTag) > -1;
    if(specialEmptyStyleTag) {
      this.cssClass = "empty";
    }

    // this.cssClass +=;

    /*
        <span class="card non-active">Ein Tag</span>
        <span class="card active">Ein weiterer Tag</span>
        <span class="card non-active">Ein echt sehr langer Tag</span>
        <span class="card active"><i class="fas fa-question"></i>&nbsp;Kein Impressum</span>
        <span class="card active"><i class="far fa-frown"></i>&nbsp;Hatespeech</span>
        <span class="card non-active"><i class="fas fa-unlink"></i>&nbsp;Keine Quellen</span>
        <span class="card color-card">Details ansehen</span> -->
    */

  }

}
