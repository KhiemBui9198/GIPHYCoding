import { DashboardComponent } from "./components/dashboard.component";
import { DashboardListComponent } from "./components/dashboard-list.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import { NewsComponent } from "src/app/news/news.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDetailComponent } from "./components/Item-detail.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardListComponent,
    ProductItemComponent,
    NewsComponent,
    ItemDetailComponent
    

  ]
})
export class DashboardModule { }
