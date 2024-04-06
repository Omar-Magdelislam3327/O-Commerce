import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-panel/main/home/home.component';
import { AboutComponent } from './user-panel/main/about/about.component';
import { ContactComponent } from './user-panel/main/contact/contact.component';
import { ProductsComponent } from './user-panel/main/products/products.component';
import { ProductsDetailsComponent } from './user-panel/main/products-details/products-details.component';
import { DashboardComponent } from './admin-panel/main/dashboard/dashboard.component';
import { ListComponent } from './admin-panel/main/products/list/list.component';
import { AddComponent } from './admin-panel/main/products/add/add.component';
import { EditComponent } from './admin-panel/main/products/edit/edit.component';
import { SalesListComponent } from './admin-panel/main/sales/sales-list/sales-list.component';
import { SalesAddComponent } from './admin-panel/main/sales/sales-add/sales-add.component';
import { SalesEditComponent } from './admin-panel/main/sales/sales-edit/sales-edit.component';
import { MessagesComponent } from './admin-panel/main/messages/messages.component';
import { DiscountsComponent } from './user-panel/main/discounts/discounts.component';
import { DiscountsDetailsComponent } from './user-panel/main/discounts-details/discounts-details.component';
import { CartComponent } from './user-panel/main/cart/cart.component';
import { LoginComponent } from './admin-panel/access/login/login.component';
import { RegisterComponent } from './admin-panel/access/register/register.component';
import { Error404Component } from './user-panel/error404/error404.component';
import { CartsComponent } from './admin-panel/main/carts/carts.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"notFound" , component: Error404Component},
  {path:"home" , component: HomeComponent , title:"O Commerce"},
  {path:"about" , component : AboutComponent , title:"O Commerce | About Us"},
  {path:"contact" , component:ContactComponent , title:"O  Commerce | Contact Us"},
  {path:"products" , component:ProductsComponent , title:"O  Commerce | Products"},
  {path:"details/:id" , component:ProductsDetailsComponent , title:"O   Commerce | Details"},
  {path:"discounts" , component:DiscountsComponent , title:"O  Commerce | Discounts"},
  {path:"show/:id" , component:DiscountsDetailsComponent , title:"O   Commerce | Details"},
  {path:"cart" , component:CartComponent , title:"O Commerce | Cart"},
  {path:"cartss/:id" , component:ModalEditComponent , title:"O Commerce | Cart"},
  {path:"admin",
    children:[
      {path:"dashboard" , component:DashboardComponent , title:"O Commerce | Dashboard"},
      {path:"products"
      , children:[
        {path:"list" , component:ListComponent , title:"Admin | Products List"},
        {path:"add" , component:AddComponent , title:"Admin | Add Product"},
        {path:"edit/:id" , component:EditComponent , title:"Admin | Edit Product"}
      ]
      },
      {path:"sales" ,
    children:[
      {path:"list" , component:SalesListComponent , title:"Admin | Sales List"},
      {path:"add" , component:SalesAddComponent , title:"Admin | Add Sale "},
      {path:"edit/:id" , component:SalesEditComponent , title:"Admin | Edit Sale"}
    ]
      },
      {path:"messages" , component:MessagesComponent , title:"Admin | Messages"},
      {path:"carts" , component: CartsComponent , title:"Admin | Carts"},
      {path:"login" , component:LoginComponent , title:"Admin | Login"},
      {path:"signup" , component:RegisterComponent , title:"Admin | Sign Up"}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
