import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrain',
  templateUrl: './viewtrain.component.html',
  styleUrls: ['./viewtrain.component.css']
})
export class ViewtrainComponent implements OnInit {

  constructor() { }
  root=[{"id":1,"trainName":"thripura","trainNo":123,"fromPlace":"kottayam","toPlace":"kollam","totalSeat":800},{"id":2,"trainName":"amruthapuri","trainNo":559,"fromPlace":"aluva","toPlace":"goa","totalSeat":867},{"id":3,"trainName":"boompouri","trainNo":990,"fromPlace":"kollam","toPlace":"allappuzha","totalSeat":365},{"id":4,"trainName":"chozhi","trainNo":667,"fromPlace":"delhi","toPlace":"tamilnadu","totalSeat":445},{"id":5,"trainName":"soomiya","trainNo":672,"fromPlace":"delhi","toPlace":"AP","totalSeat":994}]

  ngOnInit(): void {
  }

}
