import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

constructor(private api:ApiService , private router:Router, private route : ActivatedRoute ){

}
formdata:any;
id:any;
posting = false;

  ngOnInit(): void {

    this.getData();

    this.id = this.route.snapshot.params['id']
    // console.log(this.id);
    
    if(this.id != undefined){
      this.api.get("https://63c8dcee904f040a965187cc.mockapi.io/api/s1/users/" + this.id).subscribe((result:any)=>{
        console.log(result);
        this.formdata = new FormGroup(
          {
            name : new FormControl ( result.name , Validators.compose([Validators.required])),
            percentage : new FormControl ( result.percentage , Validators.compose([Validators.required, Validators.pattern("")]))
          }
        )
        
      })
    }

  }

  getData(){
    this.formdata = new FormGroup(
      {
        name : new FormControl ("", Validators.compose([Validators.required])),
        percentage : new FormControl ("", Validators.compose([Validators.required, Validators.pattern("")]))
      }
    )
  }

  save(data:any){
    this.posting = true
    // console.log(data);
    if(this.id == undefined)
    {
      this.api.post("https://63c8dcee904f040a965187cc.mockapi.io/api/s1/users", data).subscribe((result)=>{
        this.router.navigate(['']);
      })
      
    }
    else{
      this.api.put("https://63c8dcee904f040a965187cc.mockapi.io/api/s1/users/" + this.id , data).subscribe((result)=>{
        // console.log(result);
        this.router.navigate(['']);
        
      })
    }
    }

}
