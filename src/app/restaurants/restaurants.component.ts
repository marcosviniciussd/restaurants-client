import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  faStar = faStar;
  restaurantList:Array<any> = [];
  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getMenu(id: string): void {
    this.router.navigate(['/restaurants-menu', id])
  }

  getRestaurants(): void {
    console.log("getRestaurants");

    this.restaurantService.getAll().subscribe((data) => {
      console.log("Get restaurant successfully");
      this.restaurantList = data;
      console.log(this.restaurantList);
    }, (err) => {
      console.log(err);
    });
  }

}
