import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardListComponent } from './components/dashboard-list.component';
import { DashboardComponent } from './components/dashboard.component';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import { ItemDetailComponent } from './components/Item-detail.component';
export const DashboardRoutes: Routes = [
  {

    path: '',
    component: DashboardComponent,
    data: {
      Title: "Dashboard"
    },
    children: [
      {
        path: '',
        component: DashboardListComponent,
        children: [
        ]
      },
      {
        path: "view/:giphId",
        component: ItemDetailComponent,
        children: [
        ]
      }
    ]
  }
];