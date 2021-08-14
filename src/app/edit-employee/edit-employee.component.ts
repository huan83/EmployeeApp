import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeId : any;
  employee: any;
  employees: any
  errorMsg: any;
  //editemployeeForm;

  constructor(private actRoute: ActivatedRoute, private empService: EmployeeServiceService, private fb: FormBuilder, private router: Router) { }

  public editemployeeForm = this.fb.group({
    id: [0, []],
    Firstname: ['', [Validators.required, Validators.minLength(3)]],
    Lastname: ['', [Validators.required, Validators.minLength(3)]],
    Salary: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
    Department: ['', [Validators.required, Validators.minLength(2)]],
  });

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.employeeId = id;
      console.log(this.employeeId);
      this.employee = this.empService.getEmployeeById(this.employeeId).subscribe(
        (data: any) => {this.employee = data; console.log(data);
          this.editemployeeForm = this.fb.group({
            id: [this.employeeId,[]],
            Firstname: [this.employee.Firstname, [Validators.required, Validators.minLength(3)]],
            Lastname: [this.employee.Lastname, [Validators.required, Validators.minLength(3)]],
            Salary: [this.employee.Salary, [Validators.required, Validators.pattern('^[0-9]+$')]],
            Department: [this.employee.Department, [Validators.required, Validators.minLength(2)]],
          });
        },
        (error: any) => {this.errorMsg = error; console.log(error); }
      );
    });
  }

  
  get firstName(){
    return this.editemployeeForm.get('Firstname');
  }

  get lastName(){
    return this.editemployeeForm.get('Lastname');
  }

  get salary(){
    return this.editemployeeForm.get('Salary');
  }

  get department(){
    return this.editemployeeForm.get('Department');
  }

  update(employeeId: any, editemployeeForm: any){
    console.log(this.employeeId);
    console.log(this.editemployeeForm);
    this.empService.updateEmployee(this.editemployeeForm.value).subscribe(
      (data: any) => {this.employee = data; console.log(data);
        this.empService.getEmployees().subscribe(
          (data: any) => this.employees = data,
          (error: any) => this.errorMsg = error
        )
      },
      (error: any) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/employee']);
  }


}
