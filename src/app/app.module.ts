import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoaderService } from "./core/services/loader.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { FullComponent } from './layouts/full/full.component';
import { AppRoutingModule } from "./app.routing";
import { RouterModule } from '@angular/router';
import{AppBlankComponent} from './layouts/blank/blank.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CommonModule } from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarModule } from 'angular-calendar';
import { SettingdModule } from './modules/setting/setting.module';
import { MyProfiledModule } from './modules/myProfile/myprofile.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponentModule } from './modules/calendar/calendar.module';
import { ToDoModule } from './modules/to-do/todo.module';
import { ProfileDialogComponent } from './modules/myProfile/components/profile-dialog.component';
import { UserProfileOverviewComponent } from './modules/myProfile/components/user-profile-overview.component';
import {HttpClientModule } from '@angular/common/http'


const inappModules = [
  DashboardModule,
  CalendarModule,
  SettingdModule,
  MyProfiledModule,
  CalendarComponentModule,
  ToDoModule
];


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    AppBlankComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProfileDialogComponent,
    UserProfileOverviewComponent
  ],
  imports: [    
    HttpClientModule,
    CommonModule,
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ...inappModules
  ],
  providers: [
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
