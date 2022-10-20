import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  trainName=""

  readValue=()=>{
    let data={
      "trainName":this.trainName
    }
    console.log(data)
    this.myapi.searchboook(data).subscribe(
      (data)=>{
        this.data=data
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}
