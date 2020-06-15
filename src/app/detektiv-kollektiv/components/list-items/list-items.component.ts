import {Component, OnInit} from '@angular/core';
import {Item} from '../../model/item';
import {ItemsService} from '../../services/items/items.service';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent implements OnInit {

  itemsList: Array<Item> = [];

  constructor(
    private router: Router,
    private itemsService: ItemsService,
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.loadAllItems();
  }

  home(): void {
    this.router.navigate(['/']);
  }

  private loadAllItems(): void {
    this.loaderService.show();
    this.itemsService.getAllItems().then((items: Item[]) => {
      this.loaderService.hide();
      for (const item of items) {
        this.itemsList.push(item);
      }
    });
  }
}
