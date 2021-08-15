import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from './service/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeProject';
  options: FormGroup;

  constructor(private authSevice: AuthserviceService, private router:Router, fb: FormBuilder){
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  logout(){
    this.authSevice.logoutUser();
    this.router.navigate(['home'])
  }
}
