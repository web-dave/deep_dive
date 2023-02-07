import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RouterModule } from '@angular/router';
import { CUSTOMER_ROUTES } from './customer.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(CUSTOMER_ROUTES), SharedModule]
})
export class CustomerModule {}
