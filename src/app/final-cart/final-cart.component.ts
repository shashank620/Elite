import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-final-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './final-cart.component.html',
  styleUrl: './final-cart.component.css'
})
export class FinalCartComponent {
  cardDetals: any;
  initialValue = 1;
  cartLength: any;
  grandTotal:any;
  showProceedToCart:any;
  constructor(private service: AuthService, private route: Router) {
  }
  ngOnInit() {
    this.cardDetals = this.service.getProduct();
    console.log("::: card details", this.cardDetals);
  }
  handleCount(val: any, i: any) {
    console.log("::: i", i);
      this.initialValue = val == 'minus' ? this.initialValue - 1 : this.initialValue + 1;
  }
  multiplyAmount(amt:any) {
    console.log("::: amt",amt)
    const parsedAmount = parseFloat(amt.replace(/,/g, ''));
    if (!isNaN(parsedAmount)) {
      const grandTotal = parsedAmount * this.initialValue;
      return grandTotal;
    } else {
      return this.cardDetals.filter((fill:any)=> fill.prize)
    }
  }
  delete(i: any) {
    this.cardDetals = this.cardDetals.filter((_val: any, index: any) => i !== index);
    this.service.updateCard(this.cardDetals)
  } editClick() {
    this.route.navigate(['/build_pc'])
  }
  updateCartClick(){
    this.showProceedToCart = true;
  }
  Checkout(){
    this.route.navigate(['./signIn'])
  }
}
