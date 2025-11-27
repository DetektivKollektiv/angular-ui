import { Item } from '../model/item';

export class ArchiveStateModel {
  items: Item[];
  detailItem: Item | null;
  // Filters and sorting are intentionally left out for now while the archive UI is simplified.
}
