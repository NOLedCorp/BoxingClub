import { Component, OnInit, Input } from '@angular/core';
import { SectionService } from '../services/sections.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  constructor(private ss:SectionService) { }

  ngOnInit() {
  }
  showSections(){
    window.scrollTo(0,this.ss.section.nativeElement.offsetTop);
  }

}
