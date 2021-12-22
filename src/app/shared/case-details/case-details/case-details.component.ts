import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  @Input() case: any;
  @Input() caseId: string;
  @Input() showDescription = true;
  @Input() description: string;

  ngOnInit(): void {
  }
}
