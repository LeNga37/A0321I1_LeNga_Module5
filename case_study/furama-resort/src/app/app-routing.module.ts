import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {CustomerCreateComponent} from "./components/customers/customer-create/customer-create.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customer-list', component:CustomerListComponent},
  {path:'customer-create', component:CustomerCreateComponent},
  {path: 'customer-edit/:id',component:CustomerEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule, FormsModule, Ng2SearchPipeModule,
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, CustomerListComponent, CustomerCreateComponent, CustomerEditComponent]
})
export class AppRoutingModule { }
