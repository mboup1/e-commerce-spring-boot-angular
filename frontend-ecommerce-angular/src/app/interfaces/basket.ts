import { BasketItem } from "./basket-item";

export interface Basket {
  id: number;
  nameBasket: string;
  totalPrice: number;
  basketItems: BasketItem[];
  totalItems: number;
}
