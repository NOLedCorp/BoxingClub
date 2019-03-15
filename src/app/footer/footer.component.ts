import { Component, OnInit, Input } from '@angular/core';
import { SectionService } from '../services/sections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  constructor(private ss:SectionService, private router:Router) { }

  ngOnInit() {
  }
  showSections(){
    this.router.navigate(['/']);
    window.scrollTo(0,this.ss.section.nativeElement.offsetTop);
  }

}
