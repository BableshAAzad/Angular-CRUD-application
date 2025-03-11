import { Component } from '@angular/core';
import { EmployeeService } from "../services/employee.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app';

  constructor(private apiService: EmployeeService) {


    // get all employees
    apiService.getAllEmployee().subscribe((response) => {
      console.log("response : ", response)
    })
  }
}
