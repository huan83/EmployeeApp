import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[]=[];

  constructor(public dataService:EmployeeServiceService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.getEmployees()
      .subscribe(
        (data) => {this.dataService.employees = data; console.log(data);},
        (error) => {console.log(error)}
        )
  }

  displayEmployees(){    
    this.dataService.getEmployees().subscribe(
      (data) => this.employees = data,
      (error) => console.log(error)
    )
  }

  DisplayDetials(emp:Employee){
    let details = `
    Id: ${emp.id}
    Firstnmae: ${emp.Firstname}
    Lastname: ${emp.Lastname}
    Salary: ${emp.Salary}`

    alert(details);
    console.log("the navigate id is: " + emp.id)
    this.router.navigate(['/employee-detail', emp.id])
  }

  deleteEmployee(id:number){
    //alert("going to delete " + id)
/*     this.dataService.deteletEmployee(id).subscribe(
      (data) => {console.log(data),this.displayEmployees()},
      (err) => console.log(err)
    ) */
    console.log("delete " + id);
/*     this.dataService.deteletEmployee(id).subscribe(
      (data) => {
        this.dataService.getEmployees().subscribe(
          (data)=>{this.employees = data;}
        )
      }
    ) */

    this.dataService.deteletEmployee(id).toPromise()//to make it synchronize
    .then(
      (data) =>{
        this.dataService.getEmployees().toPromise()
        .then(
          (data) => {this.dataService.employees = data}
        )
      }
    )
  }

  addEmployee(){
    this.router.navigate(['/addEmployee']);
  }

  viewEmployee(emp:Employee){
    this.router.navigate(['/employee/view/', emp.id])
  }

}
