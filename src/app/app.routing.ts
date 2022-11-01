import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from "./layouts/full/full.component";
import { NgModule } from '@angular/core';
import { DashboardRoutes } from "./modules/dashboard/dashboard-routing.module";
import { MyProfileRoutes } from './modules/myProfile/myprofile-routing.module';
import { CalendarRoutes } from './modules/calendar/calendar-routing.module';
import { SettingRoutes } from './modules/setting/setting-routing.module';
import { TodoRoutes } from './modules/to-do/todo-routing.module';

const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        children: [...DashboardRoutes],
        data: {
          breadcrumb: {
            label: 'Dashboard',
          }
        }
      },
      {
        path: 'myprofile',
        children: [...MyProfileRoutes],
        data: {
          breadcrumb: {
            label: 'My profile',
          }
        }
      },
      {
        path: 'calendar',
        children: [...CalendarRoutes],
        data: {
          breadcrumb: {
            label: 'Calendar',
          }
        }
      },
      {
        path: 'setting',
        children: [...SettingRoutes],
        data: {
          breadcrumb: {
            label: 'Setting',
          }
        }
      },
      {
        path: 'todo',
        children: [...TodoRoutes],
        data: {
          breadcrumb: {
            label: 'To do',
          }
        }
      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
