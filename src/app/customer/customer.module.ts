import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CUSTOMER_ROUTES } from './customer.routes';

@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(CUSTOMER_ROUTES)]
})
export class CustomerModule {}
