import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './User/components/home/home.component';
import { NewsComponent } from './User/components/news/news.component';
import { SupportTeamComponent } from './User/components/support-team/support-team.component';
import { ThanksappreciationComponent } from './User/components/thanksappreciation/thanksappreciation.component';
import { UpdatesComponent } from './User/components/updates/updates.component';
import { AchievementsComponent } from './User/components/achievements/achievements.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'support',component:SupportTeamComponent},
  {path:'thanks',component:ThanksappreciationComponent},
  {path:'updates',component:UpdatesComponent},
  {path:'achievement',component:AchievementsComponent},
  {path:'**',component:ThanksappreciationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
