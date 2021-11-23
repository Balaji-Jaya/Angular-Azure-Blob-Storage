import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

aboutPage(){
  this.router.navigate(['/about']);
}

homePage(){
  this.router.navigate(['/home']);
}

}
