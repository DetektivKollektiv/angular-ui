import { Component, OnDestroy, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './core/services/user/user.service';
import { User } from './core/model/user';
import { MatDialog } from '@angular/material/dialog';
import { MobileDialogComponent } from './shared/helper/components/mobile-dialog/mobile-dialog.component';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private destroy$: Subject<any> = new Subject<any>();
  public user: User;

  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.translateService.use('de-DE');

    this.userService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.user = user;
    });

    this.handleAnchorScrolling();
  }

  @HostListener('unloaded')
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * Fixes Angular anchor scrolling behavior
   */
  handleAnchorScrolling() {
    this.viewportScroller.setOffset([0, 80]);
    this.router.events.pipe(filter((e) => e instanceof Scroll), takeUntil(this.destroy$)).subscribe((e: Scroll) => {
      if (e.anchor) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(e.anchor);
        });
      } else if (e.position) {
        // backward navigation
        this.viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
