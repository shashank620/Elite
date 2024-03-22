import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  addProduct:any;
  constructor() { }
  setProduct(product:any){
    this.addProduct = product;
  }
  getProduct(){
    return this.addProduct;
  }
  userLog:any;
  setUserLogin(user:any){
    this.userLog = user
  }
  getUserLogin(){
    return this.userLog
  }
  private updateNavbarSubject = new Subject<boolean>();
  updateNavbar$ = this.updateNavbarSubject.asObservable();
  updateNavbar(update: any) {
    this.updateNavbarSubject.next(update);
  }
  updateCart$ = this.updateNavbarSubject.asObservable();
  updateCard(cardsDetails:any){
    this.updateNavbarSubject.next(cardsDetails);
  }
  userLoginCheck= false
setValues(val:any){
  this.userLoginCheck = val;
}
getValues(){
  return this.userLoginCheck;
}
}
