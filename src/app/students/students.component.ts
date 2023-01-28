import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private api:ApiService){}

  students:any;

  ngOnInit(): void {
    this.load();
  }
  load()
  {
    this.api.get("https://63c8dcee904f040a965187cc.mockapi.io/api/s1/users").subscribe((result=>{
      // console.log(result);
      this.students = result ;
      // console.log("data",this.students);
      
    }))
  }

  delete(id:any)
  {
    // alert(id)
    if(confirm("Sure to delete ?"))
    {
      this.api.delete("https://63c8dcee904f040a965187cc.mockapi.io/api/s1/users/" + id).subscribe((result)=>{
      this.load();
    })
    }
  }



}
