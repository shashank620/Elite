import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarUpdated:any;
  btnName1:any;
  btnName2:any;
   constructor(private route:Router,private service:AuthService,){
   }

   cartLength=0;
   ngOnInit(): void {
     this.service.updateNavbar$.subscribe((update:any) => {
       this.isNavbarUpdated = update;
       console.log("::: isNavbarUpdated",this.isNavbarUpdated);
     });
     this.service.updateCart$.subscribe((res:any)=>{
      console.log("::: res",res);
      this.cartLength = res.length;
     })
   }
   logout(val?:any){
    this.isNavbarUpdated.val= val == 'img' ? true: false
    window.location.reload()
   }
  signUp(){
      this.route.navigate(['./signUp'])
  }
  signIn(){
    this.route.navigate(['./signIn'])
  }
  handleBuild(){this.route.navigate(['./build_pc'])}
  handleCard(){
   this.cartLength == 0 ? '': this.route.navigate(['./add_cart']) ;
  }
}
