import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// User
// Shared
import { NavComponent } from './user-panel/shared/nav/nav.component';
import { FooterComponent } from './user-panel/shared/footer/footer.component';
// Components
import { HomeComponent } from './user-panel/main/home/home.component';
import { LoginComponent } from './user-panel/main/login/login.component';
import { AboutComponent } from './user-panel/main/about/about.component';
import { ContactComponent } from './user-panel/main/contact/contact.component';
import { ProductsComponent } from './user-panel/main/products/products.component';
import { ProductsDetailsComponent } from './user-panel/main/products-details/products-details.component';
// admin
// Shared
import { NavbarComponent } from './admin-panel/shared/navbar/navbar.component';
// Components
import { DashboardComponent } from './admin-panel/main/dashboard/dashboard.component';
import { ListComponent } from './admin-panel/main/products/list/list.component';
import { AddComponent } from './admin-panel/main/products/add/add.component';
import { EditComponent } from './admin-panel/main/products/edit/edit.component';
import { from } from 'rxjs';
import { SalesListComponent } from './admin-panel/main/sales/sales-list/sales-list.component';
import { SalesEditComponent } from './admin-panel/main/sales/sales-edit/sales-edit.component';
import { SalesAddComponent } from './admin-panel/main/sales/sales-add/sales-add.component';
import { MessagesComponent } from './admin-panel/main/messages/messages.component';
import { DiscountsComponent } from './user-panel/main/discounts/discounts.component';
import { DiscountsDetailsComponent } from './user-panel/main/discounts-details/discounts-details.component';
import { CartComponent } from './user-panel/main/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NavbarComponent,
    DashboardComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SalesListComponent,
    SalesEditComponent,
    SalesAddComponent,
    MessagesComponent,
    DiscountsComponent,
    DiscountsDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
