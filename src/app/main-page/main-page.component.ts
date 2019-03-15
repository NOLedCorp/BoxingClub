import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SectionService } from '../services/sections.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  constructor(public sv:SectionService) {
    
   }

  ngOnInit() {
  }

}
