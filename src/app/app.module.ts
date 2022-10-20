import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { FormsModule } from '@angular/forms';
import { ViewtrainComponent } from './viewtrain/viewtrain.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksearchComponent } from './booksearch/booksearch.component';
const appRoutes:Routes=[
  {
    path:"",component:AddtrainComponent
  },
  {
    path:"done",component:ViewtrainComponent
  },
  {
    path:"ok",component:BooksearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddtrainComponent,
    ViewtrainComponent,
    BooksearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
