import { Component, OnInit, Input, TemplateRef, OnChanges } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { SectionService } from '../services/sections.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() sections:SectionService;
  constructor(public ms:ModalService, private ss:SectionService) { }
  ngOnChanges(){
    if(this.sections.section){
    }
  }
  ngOnInit() {
    
  }
  showSections(){
    window.scrollTo(0,this.sections.section.nativeElement.offsetTop);
  }
  

}
