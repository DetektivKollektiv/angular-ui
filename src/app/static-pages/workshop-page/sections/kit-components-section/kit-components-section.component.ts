import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-kit-components-section',
  templateUrl: './kit-components-section.component.html',
  styleUrls: ['./kit-components-section.component.scss']
})


export class KitComponentsSectionComponent implements OnInit {
  @Input() json: string;

  components: any = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('assets/data/' + this.json).subscribe(data => {
      this.components = data;
    });
  }
}
