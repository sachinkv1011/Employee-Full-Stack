import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

        empCode = ""
        empName = ""
        designstion = ""
        salary = ""
        compName = ""
        mobileNo = ""
        username = ""
        password = ""


        readValue=()=>{
          let data:any={
            "empCode" :this.empCode,
            "empName" :this.empName,
            "designstion" :this.designstion,
            "salary" :this.salary,
            "compName" :this.compName,
            "mobileNo" :this.mobileNo,
            "username" :this.username,
            "password" :this.password
          }
          console.log(data)

        }

}
