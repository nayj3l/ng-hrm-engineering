import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HrmProjectsComponent } from './hrm-projects/hrm-projects.component';
import { HrmServicesComponent } from './hrm-services/hrm-services.component';
import { HrmTeamComponent } from './hrm-team/hrm-team.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path: 'projects',
    component: HrmProjectsComponent,
    children: [
      {
          path: '',
          pathMatch: 'full',
          redirectTo: 'commercial-office-buildings'
      },
      { path: ':id', component: ProjectListComponent}
    ]
  },
  { path: 'services', component: HrmServicesComponent},
  { path: 'team', component: HrmTeamComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  HrmProjectsComponent,
  HrmServicesComponent,
  HrmTeamComponent,
  AboutComponent,
  ContactUsComponent
]