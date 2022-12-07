import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  empCode=""

  readValue=()=>{
    let data:any={
      "empCode":this.empCode
    }
    console.log(data)
  }
}
