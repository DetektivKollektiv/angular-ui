import {Component, Input, OnInit} from '@angular/core';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-block',
  templateUrl: './faq-block.component.html',
  styleUrls: ['./faq-block.component.scss']
})
export class FaqBlockComponent implements OnInit {

  @Input() headline: string;
  @Input() file: string;

  // todo@cba fix the hard coded toggles
  toggle = [false, false];

  faq: Faq[];

  constructor() {
  }

  ngOnInit(): void {
    import('src/assets/data/' + this.file).then(data => {
      this.faq = data;
    });
  }

}
