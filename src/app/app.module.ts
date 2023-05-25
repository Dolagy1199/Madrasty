import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './User/components/navbar/navbar.component';
import { SliderComponent } from './User/components/slider/slider.component';
import { HomeComponent } from './User/components/home/home.component';
import { UpdatesComponent } from './User/components/updates/updates.component';
import { SupportTeamComponent } from './User/components/support-team/support-team.component';
import { AchievementsComponent } from './User/components/achievements/achievements.component';
import { ThanksappreciationComponent } from './User/components/thanksappreciation/thanksappreciation.component';
import { NewsComponent } from './User/components/news/news.component';
import {FooterComponent } from  './User/components/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    UpdatesComponent,
    SupportTeamComponent,
    AchievementsComponent,
    ThanksappreciationComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
