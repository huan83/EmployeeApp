import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  paramID:number = 0;
  public empId:any;
  public employee:any;

  constructor(private activeedRoute: ActivatedRoute,
    private dataService: EmployeeServiceService) { }

  ngOnInit(): void {
    //this.paramID = this.activeedRoute.snapshot.params['id'];
    //alert("in employ details")

    this.activeedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id = params.get('id');
      console.log(id);
      this.paramID = Number(id);
    });
    
    this.dataService.getEmployeeById(this.paramID).subscribe(
      //(data) => {this.employees.push(data); console.log(data);},
      (data) => {this.employee = data; console.log(data);},
      (error) => {console.log(error)}
    )
  }

}
