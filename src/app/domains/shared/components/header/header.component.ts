import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  hideSideMenu = signal(true);

  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
