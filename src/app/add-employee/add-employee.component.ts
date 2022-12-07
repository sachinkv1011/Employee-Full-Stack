import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

      constructor(private api:ApiService){}
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
          this.api.addEmployee(data).subscribe(
            (response)=>{
              console.log(response)
            }

          
          )

        }

}
