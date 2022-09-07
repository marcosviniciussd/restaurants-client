import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { filter, map, mapTo, Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

//const baseUrl = '../../assets/restaurants.json';
const baseUrl = 'api/restaurants';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl)
  }

  getById( id: string ): Observable<Restaurant[]> {
    return this.http.get(baseUrl).pipe(map((data : any) =>
    {
      return data.filter((item: any) => item.id == id)[0]
    }));
  }
}
