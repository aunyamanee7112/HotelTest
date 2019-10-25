import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkComponent } from './my-work/MyWorkComponent';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StepperFromComponent } from './stepper-from/stepper-from.component';



@NgModule({
  declarations: [MyWorkComponent, MyOrderComponent, MyProfileComponent, StepperFromComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardHotelModule { }
