// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  imports: [
    CustomerModule,
    RouterModule.forRoot(APP_ROUTES, { enableTracing: false, preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [AppComponent, SidebarComponent, NavbarComponent, HomeComponent, AboutComponent, NotFoundComponent, BasketComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
