import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { FieldService } from '../services/field.service';

@Injectable({
  providedIn: 'root'
})
export class FieldResolver implements Resolve<any> {
  constructor(
    private fieldService: FieldService,
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.fieldService.get();
  }
}
