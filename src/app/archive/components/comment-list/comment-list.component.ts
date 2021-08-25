import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[];

  constructor() { }

  ngOnInit(): void {
  }

  handlePageChange(event: number) {
  }

}
