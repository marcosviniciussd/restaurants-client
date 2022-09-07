import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant, RestaurantItems } from '../models/restaurant.model';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})

export class RestaurantMenuComponent implements OnInit {
  faPlus = faPlus;
  faStar = faStar;
  restaurantId = "";
  menuItems : Array<RestaurantItems> = [];
  restaurant : Restaurant = {
    id: 0,
    name: "",
    description: "",
    category: "",
    rating: 0,
    img: "",
    menuItems: []
  };

  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.getMenuInfo();
    this.menuItems =  this.getMenuItems() || [];
  }

  getMenuInfo(): void {
    console.log("Get data successfully");
    this.restaurantId = this.router.snapshot.paramMap.get('id') || "";
    this.restaurantService.getById(this.restaurantId).subscribe((data: any) => {
      this.restaurant = data;
      console.log("Get data successfully");
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  addMenuItem(e: Event, item: RestaurantItems): void {
    e.preventDefault();
    let allMenuItems = this.menuItems || [];

    if ( Array.isArray(allMenuItems) ) {
      allMenuItems.push(item);
    }

    localStorage.setItem('menuItems', JSON.stringify(allMenuItems));
  }

  getMenuItems(): Array<RestaurantItems> {
    let menuItemsLocal = localStorage.getItem('menuItems');
    console.log("menuItemsLocal");
    console.log(menuItemsLocal);
    return menuItemsLocal ? JSON.parse(menuItemsLocal) : [];
  }

}
