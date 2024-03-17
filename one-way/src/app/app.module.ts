import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './home/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, MatToolbarModule, NavBarComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
