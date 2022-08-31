import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantList:Array<any> = [];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    console.log("getRestaurants");

    this.restaurantService.getAll().subscribe((data) => {
      console.log("Get restaurant successfully");
      this.restaurantList = data;
      console.log(this.restaurantList);
    }, (err) => {
      console.log(err);
    })
  }

}
