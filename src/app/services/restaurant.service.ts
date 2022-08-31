import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const baseUrl = '../../assets/restaurants.json';
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
}
