export interface RestaurantItems {
  id_menu: number;
  name: string;
  description: string;
  price: number;
  img: string;
}
export interface Restaurant {
  id: number;
  name: string;
  description: string;
  category: string;
  rating?: number;
  img?: string;
  menuItems?: Array<RestaurantItems>;
}
