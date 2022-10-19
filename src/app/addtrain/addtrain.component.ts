import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  constructor(private api:ApiService) { }
  trainName=""
  trainNo=""
  fromPlace=""
  toPlace=""
  totalSeat=""
  readvalues=()=>{
    let data={
      "trainName":this.trainName,
      "trainNo":this.trainNo,
      "fromPlace":this.fromPlace,
      "toPlace":this.toPlace,
      "totalSeat":this.totalSeat
    }
    console.log(data)
    this.api.addtrain(data).subscribe(
      (data)=>{
        alert("data insert successfully")
      }
    )
  }
  ngOnInit(): void {
  }

}
