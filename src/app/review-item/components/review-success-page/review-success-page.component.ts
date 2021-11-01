import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { ArchiveService } from 'src/app/archive/services/archive.service';
import { UserService } from '../../../core/services/user/user.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-review-success-page',
  templateUrl: './review-success-page.component.html',
  styleUrls: ['./review-success-page.component.scss'],
  providers: []
})
export class ReviewSuccessPageComponent {
  user$ = this.userService.user$;

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fall lösen', link: '/reviews' }];

  case: Item;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
    this.case = this.getItemFromRouterState();
  }

  private getItemFromRouterState(): Item {
    const state = this.router.getCurrentNavigation().extras?.state;

    if (!state) {
      this.snackBar.open('Ups, da ist etwas schiefgelaufen!', '', {
        duration: 5000
      });

      this.router.navigate(['/']);
      return null;
    }

    const { item } = state;
    return item;
  }
}
