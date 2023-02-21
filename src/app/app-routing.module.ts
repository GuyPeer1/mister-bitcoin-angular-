import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  {
    path: '', component: ContactIndexComponent,
    children: [
      {
        path: 'edit', component: ContactEditComponent,
      },
      {
        path: 'edit/:id', component: ContactEditComponent,
        resolve: {contact: ContactResolver}
      }]
  },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: 'statistics', component: StatisticsPageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
