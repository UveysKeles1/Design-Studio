import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FooterComponent } from './home/footer/footer.component';
import { SpeisekarteComponent } from './home/speisekarte/speisekarte.component';
import { OpeningHoursComponent } from './home/opening-hours/opening-hours.component';
import { KontaktComponent } from './home/kontakt/kontakt.component';
import { AnfahrtComponent } from './home/anfahrt/anfahrt.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, FooterComponent, SpeisekarteComponent, OpeningHoursComponent, KontaktComponent, AnfahrtComponent],
  imports: [BrowserModule, MatToolbarModule, NavBarComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
