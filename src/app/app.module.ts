import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InscrptionComponent } from './inscrption/inscrption.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './home/about/about.component';
import { HeaderComponent } from './home/header/header.component';
import {CustomersComponent} from './home/customers/customers.component';
import { CustomerHeaderComponent } from './home/customers/customer-header/customer-header.component';
import { CustomersCardListComponent } from './home/customers/customers-card-list/customers-card-list.component';
import { CustomersDetailsComponent } from './home/customers/customers-details/customers-details.component';
import { CustomersListComponent } from './home/customers/customers-list/customers-list.component';
import { CustumorItemComponent } from './home/customers/customers-list/custumor-item/custumor-item.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    InscrptionComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    AboutComponent,
    HeaderComponent,
    CustomersComponent,
    CustomerHeaderComponent,
    CustomersCardListComponent,
    CustomersDetailsComponent,
    CustomersListComponent ,
    CustumorItemComponent,
    AddCustomerComponent,
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
