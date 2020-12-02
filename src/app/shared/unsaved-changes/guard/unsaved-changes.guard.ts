import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UnsavedChanges} from '../interface/unsaved-changes';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChanges> {
  canDeactivate(
    component: UnsavedChanges,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.hasChanges()){
      if (confirm('Deine Änderungen gehen verloren, wenn du die Seite verlässt.')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
