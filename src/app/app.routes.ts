import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './content/content.component';
import { CartComponent } from './cart/cart.component';
import { BuildPCComponent } from './build-pc/build-pc.component';
import { FinalCartComponent } from './final-cart/final-cart.component';

export const routes: Routes = [
  {path:'', component:ContentComponent},
  {path:'home', component:ContentComponent},
  {path:'signIn', component:LoginComponent},
  {path:'signUp', component:RegisterComponent},
  {path:'gaming', component:CartComponent},
  {path:'build_pc', component:BuildPCComponent},
  {path:'add_cart', component:FinalCartComponent},

];
