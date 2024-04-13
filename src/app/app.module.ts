import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
// User
// Shared
import { NavComponent } from './user-panel/shared/nav/nav.component';
import { FooterComponent } from './user-panel/shared/footer/footer.component';
// Components
import { HomeComponent } from './user-panel/main/home/home.component';
import { AboutComponent } from './user-panel/main/about/about.component';
import { ContactComponent } from './user-panel/main/contact/contact.component';
import { ProductsComponent } from './user-panel/main/products/products.component';
import { ProductsDetailsComponent } from './user-panel/main/products-details/products-details.component';
// admin
// Shared
import { NavbarComponent } from './admin-panel/shared/navbar/navbar.component';
// Components
import { DashboardComponent } from './admin-panel/main/dashboard/dashboard.component';
import { from } from 'rxjs';
import { SalesListComponent } from './admin-panel/main/sales/sales-list/sales-list.component';
import { SalesEditComponent } from './admin-panel/main/sales/sales-edit/sales-edit.component';
import { SalesAddComponent } from './admin-panel/main/sales/sales-add/sales-add.component';
import { MessagesComponent } from './admin-panel/main/messages/messages.component';
import { DiscountsComponent } from './user-panel/main/discounts/discounts.component';
import { DiscountsDetailsComponent } from './user-panel/main/discounts-details/discounts-details.component';
import { CartComponent } from './user-panel/main/cart/cart.component';
import { RegisterComponent } from './admin-panel/access/register/register.component';
import { LoginComponent } from './admin-panel/access/login/login.component';
import { Error404Component } from './user-panel/error404/error404.component';
import { CartsComponent } from './admin-panel/main/carts/carts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperComponent } from './swiper/swiper.component';
import { PieComponent } from './charts/pie/pie.component';
import { BarsComponent } from './charts/bars/bars.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { LinestyleComponent } from './charts/linestyle/linestyle.component';
@NgModule({
  declarations: [

    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NavbarComponent,
    DashboardComponent,
    SalesListComponent,
    SalesEditComponent,
    SalesAddComponent,
    MessagesComponent,
    DiscountsComponent,
    DiscountsDetailsComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    CartsComponent,
    SwiperComponent,
    PieComponent,
    BarsComponent,
    ModalEditComponent,
    LinestyleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    InputNumberModule,
    ChartModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
