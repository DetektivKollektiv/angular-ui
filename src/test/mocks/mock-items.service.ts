import { Injectable } from '@angular/core';
import {Item} from '../../app/detektiv-kollektiv/model/item';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService {

  constructor() { }

  public getAllItems(): Promise<Item[]>{
    return new Promise<Item[]>(() => {
      return new Item();
    });
  }

  public getItem(): Promise<Item> {
    return new Promise<Item>(() => {
      return new Item();
    });
  }
}
