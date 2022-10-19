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
  root:any=[]

  ngOnInit(): void {
  }

}
