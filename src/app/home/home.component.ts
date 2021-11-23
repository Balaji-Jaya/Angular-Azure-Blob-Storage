import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

//   imagesForSlider = [
//     {path: '/assets/ex-1.png'},
//     {path: '/assets/ex-2.png'},
//     {path: '/assets/ex-3.png'},
//     {path: '/assets/ex-4.png'},
//     {path: '/assets/ex-5.png'},
//     {path: '/assets/ex-6.jpg'},
//     {path: '/assets/ex-7.gif'},
//     {path: '/assets/ex-8.gif'}
// ];

slides = [ 
  {'image': '/assets/ex-2.png'},
  {'image': '/assets/ex-5.png'},
  {'image': '/assets/ex-8.jpg'},
  {'image': '/assets/ex-9.png'},
  {'image': '/assets/ex-10.png'}
];
}
