import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private cartService = inject(CartService);
  img = 'https://picsum.photos/640/640?r=' + Math.random();

  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Prod 1',
        price: 123,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toString(),
      },
      {
        id: 2,
        title: 'Prod 2',
        price: 74328,
        image: 'https://picsum.photos/640/640?r=43',
        creationAt: new Date().toString(),
      },
      {
        id: 3,
        title: 'Prod 3',
        price: 743,
        image: 'https://picsum.photos/640/640?r=122',
        creationAt: new Date().toString(),
      },
      {
        id: 1,
        title: 'Prod 1',
        price: 123,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toString(),
      },
      {
        id: 2,
        title: 'Prod 2',
        price: 74328,
        image: 'https://picsum.photos/640/640?r=43',
        creationAt: new Date().toString(),
      },
      {
        id: 3,
        title: 'Prod 3',
        price: 743,
        image: 'https://picsum.photos/640/640?r=122',
        creationAt: new Date().toString(),
      },
    ];

    this.products.set(initProducts);
  }

  addToCartEvent(product: Product) {
    this.cartService.addToCart(product);
  }
}
