import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import all the components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { DashboardHotelComponent } from './components/dashboard-hotel/dashboard-hotel.component';
import { MyOrderComponent } from './components/dashboard-hotel/my-order/my-order.component';
import { MyProfileComponent } from './components/dashboard-hotel/my-profile/my-profile.component';
import { MyWorkComponent } from './components/dashboard-hotel/my-work/my-work.component';
import { StepperFromComponent } from './components/dashboard-hotel/stepper-from/stepper-from.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserComponent } from './components/admindashboard/user/user.component';
import { ShowHotelComponent } from './components/show-hotel/show-hotel.component';
import { InfoHotelComponent } from './components/info-hotel/info-hotel.component';
import { DialogEdituserComponent } from './components/admindashboard/user/dialog-edituser/dialog-edituser.component';
import { EnterpernureSignupComponent } from './components/enterpernure-signup/enterpernure-signup.component';
import { AllbookingComponent } from './components/admindashboard/allbooking/allbooking.component';
import { EnterpernureAccountComponent } from './components/admindashboard/enterpernure-account/enterpernure-account.component';
import { EnterpernureAccountconfirmComponent } from './components/admindashboard/enterpernure-accountconfirm/enterpernure-accountconfirm.component'; 
import { HomeHotelComponent } from './components/home-hotel/home-hotel.component';
const routes: Routes = [
  
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main-home', component: MainHomeComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'navbar-home', component: NavbarHomeComponent },
  { path: 'dashboard-hotel', component: DashboardHotelComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: 'stepper-from', component: StepperFromComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'show-hotel', component: ShowHotelComponent },
  { path: 'info-hotel', component: InfoHotelComponent },
  {path: 'information/:id', component: InfoHotelComponent},
  {path: 'enterpernure-signup', component: EnterpernureSignupComponent},
  {path: 'allbooking', component: AllbookingComponent},
  {path: 'enterpernure-account', component: EnterpernureAccountComponent},
  {path: 'enterpernure-accountconfirm', component: EnterpernureAccountconfirmComponent},
  {path: 'home-hotel', component: HomeHotelComponent},
  {path: 'hotelAccountEdit/:id', component: EnterpernureSignupComponent},
  {path: 'useredit/:id', component: DialogEdituserComponent},  
  { path: '', redirectTo: '/main-home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
