import { Component, Input, OnInit } from '@angular/core';

interface PricingTable{
  headline: string;
  price: string;
  lines: string[];
  mailto_link: string;
}

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {
  @Input() item: PricingTable;
  constructor() { }

  ngOnInit(): void {
  }

}
