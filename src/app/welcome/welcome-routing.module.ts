import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  { path: '', component: WelcomePage},
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
