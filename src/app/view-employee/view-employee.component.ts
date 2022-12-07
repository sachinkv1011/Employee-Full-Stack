import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  employee:any=[{"id":1,"empCode":11,"empName":"sachin","designstion":"trainee","salary":25000,"compName":"nest","mobileNo":"98789876","username":"myuser1","password":"password1"},{"id":2,"empCode":12,"empName":"varun","designstion":"developer","salary":29000,"compName":"nest digital","mobileNo":"987898706","username":"myuser2","password":"password2"},{"id":3,"empCode":13,"empName":"unnni","designstion":"designer","salary":30000,"compName":" digital","mobileNo":"987898706","username":"myuser3","password":"password3"},{"id":4,"empCode":14,"empName":"mahohar","designstion":"hr","salary":35000,"compName":" tcs","mobileNo":"988898706","username":"myuser4","password":"password4"},{"id":5,"empCode":15,"empName":"pillechan","designstion":"developer","salary":40000,"compName":" wipro","mobileNo":"988898711","username":"myuser5","password":"password5"}]

}
