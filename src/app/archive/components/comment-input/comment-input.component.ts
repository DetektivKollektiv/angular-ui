import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
})
export class CommentInputComponent implements OnInit {
  @Input() authenticated: boolean;
  @Input() user;
  @Output() commentSubmitted = new EventEmitter();
  public comment:string = "";

  constructor() { }
  submitComment() {
    this.commentSubmitted.emit(this.comment)
  }
  setComment(e) {
    this.comment = e.target.value
  }
  ngOnInit(): void {
  }
}
