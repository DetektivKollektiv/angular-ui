import { Item } from 'src/app/model/item';
import { CaseFilter } from '../model/case-filter';
import { CaseSort } from '../model/case-sort';

export class ArchiveStateModel {
  items: Item[];
  detailItem: any; //todo update.
  filter: CaseFilter;
  sort: CaseSort;
}
