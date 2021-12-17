import { Component, Input, OnInit } from '@angular/core';
import { ArchiveService } from '../../../archive/services/archive.service';

@Component({
  selector: 'app-solved-cases',
  templateUrl: './solved-cases.component.html',
  styleUrls: ['./solved-cases.component.scss']
})
export class SolvedCasesComponent implements OnInit {
  @Input() expand = true;
  @Input() style: 'dark' | 'light' = 'dark';

  closedItems$ = this.archiveService.getClosedItems();
  closedItemCount = 10;

  constructor(private archiveService: ArchiveService) {}

  ngOnInit(): void {}
}
