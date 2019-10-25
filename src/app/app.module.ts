import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms' ;
// FormStepper
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatVerticalStepper} from '@angular/material/stepper';
//matslider 
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
//matDate
import {MatDatepickerModule, MatDatepickerInput} from '@angular/material/datepicker'; 
// เชื่อมต่อคอมโพแนนต์
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './shared/services/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// all component
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { DashboardHotelComponent } from './components/dashboard-hotel/dashboard-hotel.component';
import { MyWorkComponent } from './components/dashboard-hotel/my-work/my-work.component';
import { MyOrderComponent } from './components/dashboard-hotel/my-order/my-order.component';
import { MyProfileComponent } from './components/dashboard-hotel/my-profile/my-profile.component';
import { StepperFromComponent } from './components/dashboard-hotel/stepper-from/stepper-from.component';

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UserComponent } from './components/admindashboard/user/user.component';
import { ShowHotelComponent } from './components/show-hotel/show-hotel.component';
import { InfoHotelComponent } from './components/info-hotel/info-hotel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FavoriteHotelComponent } from './components/favorite-hotel/favorite-hotel.component';
import { DigloguserComponent } from './components/admindashboard/user/digloguser/digloguser.component';
import { DialogEdituserComponent } from './components/admindashboard/user/dialog-edituser/dialog-edituser.component';
import { DeletedecisionComponent } from './components/admindashboard/user/deletedecision/deletedecision.component';
import { FirebaseServiceService } from './firebase-service.service';
import { DialogBookingFormComponent } from './components/info-hotel/dialog-booking-form/dialog-booking-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { EnterpernureSignupComponent } from './components/enterpernure-signup/enterpernure-signup.component';
import { from } from 'rxjs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { AllbookingComponent } from './components/admindashboard/allbooking/allbooking.component';
import { EnterpernureAccountComponent } from './components/admindashboard/enterpernure-account/enterpernure-account.component';  
import {MatBadgeModule} from '@angular/material/badge';
import { EnterpernureAccountconfirmComponent } from './components/admindashboard/enterpernure-accountconfirm/enterpernure-accountconfirm.component';
import { NavbarhotelComponent } from './navbarhotel/navbarhotel.component';
import { HomeHotelComponent } from './components/home-hotel/home-hotel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {MatListModule} from '@angular/material/list';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    NavbarComponent,
    MainHomeComponent,
    LoginAdminComponent,
    NavbarHomeComponent,
    DashboardHotelComponent,
    MyOrderComponent,
    MyProfileComponent,
    MyWorkComponent,
    StepperFromComponent,
    AdmindashboardComponent,
    UserComponent,
    ShowHotelComponent,
    InfoHotelComponent,
    FavoriteHotelComponent,
    DigloguserComponent,
    DialogEdituserComponent,
    DeletedecisionComponent,
    DialogBookingFormComponent,
    EnterpernureSignupComponent,
    AllbookingComponent,
    EnterpernureAccountComponent,
    EnterpernureAccountconfirmComponent,
    NavbarhotelComponent,
    HomeHotelComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    CdkStepperModule,
    FormsModule,
    AngularFireDatabaseModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatInputModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    AngularFirestoreModule
    
    
    
   
  ],
  exports:[
    MatExpansionModule,MatDatepickerModule,MatNativeDateModule,MatExpansionModule,MatButtonModule
  ],
  providers: [AuthService,FirebaseServiceService ] , 
  bootstrap: [AppComponent],
  entryComponents:[DigloguserComponent,DialogEdituserComponent,DialogBookingFormComponent]
})
export class AppModule { }

