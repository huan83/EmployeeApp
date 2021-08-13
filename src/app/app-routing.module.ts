import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './service/authguard.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'addEmployee', component:AddemployeeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'employee/:id', component:EmployeeComponent},
  //{path: 'employee-detail/:id', component:EmployeeDetailComponent},
  {path: 'employee', component:EmployeeComponent, canActivate: [AuthguardGuard], canActivateChild: [AuthguardGuard],
    children:[{path: 'view/:id', component:EmployeeDetailComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
