import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InscrptionComponent } from "./inscrption/inscrption.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { CustomersDetailsComponent } from "./home/customers/customers-details/customers-details.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { CustomersComponent } from "./home/customers/customers.component";
import { AboutComponent } from "./home/about/about.component";
import { CustomersCardListComponent } from "./home/customers/customers-card-list/customers-card-list.component";
import { CustomersListComponent } from "./home/customers/customers-list/customers-list.component";

const routes: Routes=[
    {path: "", component:InscrptionComponent},
    {path: "inscripton", component: InscrptionComponent},
    {path: "home", component: HomeComponent},
    {path: "user", component: UserComponent},
    {path: "details", component: CustomersDetailsComponent},
    {path: "login", component: InscrptionComponent},
    {path: "add", component: AddCustomerComponent},
    {path: "customer", component: HomeComponent},
    {path: "about", component: AboutComponent},
   
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}