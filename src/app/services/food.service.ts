import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, timer } from 'rxjs';

import { RootObject } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodsUrl: string =
    'https://amperoid.tenants.foodji.io/machines/4bf115ee-303a-4089-a3ea-f6e7aae0ab94';

  constructor(private http: HttpClient) {}

  private handleError<T>(_operation = 'operation', result?: T) {
    return (_error: any): Observable<T> => {
      return of(result as T);
    };
  }

  public getFoods(): Observable<RootObject> {
    return this.http
      .get<RootObject>(this.foodsUrl)
      .pipe(catchError(this.handleError<RootObject>('getFoods', undefined)));
  }

  public pollFoods(interval: number): Observable<RootObject> {
    return timer(0, interval).pipe(switchMap(() => this.getFoods()));
  }
}
