import { Component } from '@angular/core';
import { EmployeeService } from "../../../services/employee.service"

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employees: any = [];

  // add employee
  constructor(private apiService: EmployeeService) {

    // get all employees
    apiService.getAllEmployee().subscribe((response) => {
      console.log("response : ", response)
      this.employees = response
    })

  }

}


