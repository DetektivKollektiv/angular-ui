import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoaderService} from '../../../shared/loader/service/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  checkItem(): void {
    this.router.navigate(['/check']);
  }

  reviewItem(): void {
    this.router.navigate(['/review']);
  }
}
