import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  showFooter = true;
  constructor(private router:Router){
    
  }
  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      if(evt.url=='/success'){
        this.showFooter=false;
      }
     
      window.scrollTo(0, 0)
     });
  }
  title = 'International';
}
