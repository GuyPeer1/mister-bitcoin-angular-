import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  {
    path: 'contact', component: ContactIndexComponent,
    children: [
      {
        path: 'contact/edit', component: ContactEditComponent,
      },
      {
        path: 'contact/edit/:id', component: ContactEditComponent,
        resolve: { contact: ContactResolver }
      }]
  },
  {
    path: '', component: HomePageComponent,
    children: [
      {
        path: 'signup', component: SignupPageComponent
      }
    ]
  },
  { path: 'contact/details/:id', component: ContactDetailsComponent },
  { path: 'statistics', component: StatisticsPageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
