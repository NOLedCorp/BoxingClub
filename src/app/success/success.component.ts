import { Component, OnInit } from '@angular/core';
import { Section, SectionService, Deal } from '../services/sections.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.less']
})
export class SuccessComponent implements OnInit {
  deal:Deal;
  constructor(public ss:SectionService, private router:Router) { }

  ngOnInit() {
    if(!this.ss.deal){
      this.router.navigate(['/']);
    }
    else{
      this.deal = this.ss.deal;
    }
  }

}
