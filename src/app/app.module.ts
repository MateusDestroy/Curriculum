

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageTwoModule } from './pageTwo/pageTwo.module';
import { PageOneModule } from './pageOne/pageOne.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';




@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageOneModule,
    PageTwoModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
