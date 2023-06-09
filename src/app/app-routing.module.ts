import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAllWalletsComponent } from './components/display-all-wallets/display-all-wallets.component';
import { ShowAllWalletsComponent } from './components/show-all-wallets/show-all-wallets.component';
import { UpdateComponent } from './components/update/update.component';
import { FundsComponent } from './components/funds/funds.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';
import { TranferFundsComponent } from './components/tranfer-funds/tranfer-funds.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'}, 
  {path :'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'demo', component:DemoComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'details/:name', component:DetailsComponent}, 
  {path:'wallet', component:DisplayAllWalletsComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'funds', component:FundsComponent},
  {path: 'withdrawFunds',component:WithdrawFundsComponent},
  {path: 'tranferFunds', component:TranferFundsComponent},
  {path: 'show', component:ShowAllWalletsComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
