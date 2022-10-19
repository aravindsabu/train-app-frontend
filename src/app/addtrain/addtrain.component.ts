import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  constructor() { }
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
  }
  ngOnInit(): void {
  }

}
