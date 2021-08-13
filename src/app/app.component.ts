import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './service/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeProject';

  constructor(private authSevice: AuthserviceService, private router:Router){}

  logout(){
    this.authSevice.logoutUser();
    this.router.navigate(['home'])
  }
}
