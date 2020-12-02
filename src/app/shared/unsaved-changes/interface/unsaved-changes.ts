import {Observable} from 'rxjs';

export interface UnsavedChanges {
  hasChanges: () => boolean | Observable<boolean>;
}
