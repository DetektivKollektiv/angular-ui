import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Kit_Component {
  img: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-kit-item',
  templateUrl: './kit-item.component.html',
  styleUrls: ['./kit-item.component.scss']
})


export class KitItemComponent implements OnInit {
  @Input() item: Kit_Component;

  components: Kit_Component;

  constructor() {
  }

  ngOnInit(): void {
  }
}
