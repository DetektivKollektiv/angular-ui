import {Component, OnInit, ElementRef} from '@angular/core';
import {Item} from '../../model/item';
import {ItemsService} from '../../services/items/items.service';
import {finalize, tap} from 'rxjs/operators';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent implements OnInit {

  constructor(
    private router: Router,
    private itemsService: ItemsService,
    private authService: AuthService,
    private loaderService: LoaderService,
  ) { }

  itemsList: Array<Item> = [];

  ngOnInit(): void {
    this.loadAllItems();
  }

  private loadAllItems(): void {

    this.loaderService.show();
    this.itemsService.getAllItems().pipe(
      finalize(() => this.loaderService.hide())
    ).subscribe((items: Array<Item>) => {

      for (var item of items) {
        this.itemsList.push(item);
      }

    });
  }

  home(): void {
    this.router.navigate(['/'])
  }

}
