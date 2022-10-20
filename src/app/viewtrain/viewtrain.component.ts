import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtrain',
  templateUrl: './viewtrain.component.html',
  styleUrls: ['./viewtrain.component.css']
})
export class ViewtrainComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewtrain().subscribe(
      (data)=>{
        this.root=data
      }
    )
  }
  deletetrain=(id:any)=>{
    let data= {
      "id":id
     }
    this.myapi.deletetrain(data).subscribe(
      (resp)=>{
        alert("delete")
      }
    )
    this.fetchData()
  }
  root:any=[]

  ngOnInit(): void {
  }

}
