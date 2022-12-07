import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService){}
  empCode=""
  searchData:any=[]
  readValue=()=>{
    let data:any={
      "empCode":this.empCode
    }
    console.log(data)
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid employee code")
          
        } else {
          this.searchData=response
          
        }

      }
    )
  }
}
