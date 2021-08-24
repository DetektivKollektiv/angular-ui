import { Item } from 'src/app/model/item';
import { Filter } from '../model/filter';

export class ArchiveStateModel {
  items: Item[];
  detailItem: any; //todo update.
  filter: Filter;
}
