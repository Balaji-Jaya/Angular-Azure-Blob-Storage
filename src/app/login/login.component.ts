import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  validadtionCheck:boolean;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router:Router) { 
    this.validadtionCheck=false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('User: ', this.user);
    if(this.user.username=='admin'&&this.user.password=='abcd'){
      localStorage.setItem('token','aksfksdfksk4545dnlgdlgldkg');
    this.router.navigateByUrl('/ocr');
    this.dialogRef.close();
  }else{
    this.validadtionCheck=true;
  }
}
}
