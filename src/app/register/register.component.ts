import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name ="Adithya Reddy";
  isValidUser = false;

  departments =["CSE", "IT" , "MECH" , "ECE"]

  onClick(){

    alert("Button Clicked");

  }

}
