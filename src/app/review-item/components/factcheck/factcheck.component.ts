import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Factcheck } from '../../model/factcheck';
import { FactCheckService } from '../../services/factchecks/fact-check.service';

@Component({
  selector: 'app-factcheck',
  templateUrl: './factcheck.component.html',
  styleUrls: ['./factcheck.component.scss'],
})
export class FactcheckComponent implements OnInit, OnChanges {
  @Input() public caseId: string;

  public factCheck: Factcheck;

  public loading: boolean;

  color = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(private factCheckService: FactCheckService) {}

  ngOnInit(): void {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;

    this.factCheckService
      .getFactCheck(changes.caseId.currentValue)
      .then((factCheck) => {
        this.factCheck = factCheck;
      })
      .catch(() => {
        this.factCheck = null;
      })
      .finally(() => (this.loading = false));
  }

  public openFactcheck() {
    window.open(this.factCheck.url, '_blank');
  }
}
