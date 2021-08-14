import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employees: any
  errorMsg: any;
  public empModel:Employee = new Employee(0, "", "", 0, "");

  constructor(public dataService:EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(empForm:any){
    console.log(this.empModel);
/*     this.dataService.createEmployee(this.empModel).subscribe(
        (data) => {this.employees = data;
          this.dataService.getEmployees().subscribe(
            (data) => this.employees = data,
            (error) => this.errorMsg = error
          )
          },
      (error) => this.errorMsg = error
    ) */
    this.dataService.createEmployee(this.empModel).toPromise()//to make it synchronize
    .then(
      (data) =>{
        this.dataService.getEmployees().toPromise()
        .then(
          (data) => {this.dataService.employees = data}
        )
      }
    )
    this.router.navigate(['/employee']);

  }

}
