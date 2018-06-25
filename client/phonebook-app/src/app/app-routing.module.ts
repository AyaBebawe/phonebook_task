import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent }      from './contacts/contacts.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'allcontacts', component: ContactsComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'detail/:secondname', component: ContactDetailComponent },
  { path: 'detail/:phonenumber', component: ContactDetailComponent },



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule { }

