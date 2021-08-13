import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  public employees:any;

  url:string= "http://localhost:4000/"
  constructor(private httpClient:HttpClient) { }

  getEmployees():Observable<any>{
    return this.httpClient.get(this.url + 'employee');
  }

  getEmployeeById(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.url + 'employee/' + id)
    //.pipe(catchError(this.errorHandler)
    //)
  }
  
  //READ ALL
  // getEmployees():Observable<any>{
  //   //http://localhost:4000/employee
  //   return this.httpClient.get(this.url + 'employee');
  // }

  // //READ ONE
  // getEmployee(id):Observable<any>{
  //   return this.httpClient.get(this.url + 'employee/' + id);
  // }

  //DELETE ONE
  //deteletEmployee(id:number):Observable<any>{
  deteletEmployee(id:number){
    return this.httpClient.delete(this.url + 'employee/' + id)
  }

  //CREATE ONE
  createEmployee(employee:any){
    return this.httpClient.post(this.url + 'employee/',employee)
  }


  //CREATE ONE
  updateEmployee(employee:any){
    return this.httpClient.put(this.url + 'employee/' + employee['id'],employee)
  }
}
