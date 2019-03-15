import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { SectionService, Section } from '../services/sections.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit, OnChanges {
  section:Section;
  constructor(private ss:SectionService, private route: ActivatedRoute, public ms:ModalService) { }

  ngOnChanges(ch:SimpleChanges){
  }
  ngOnInit() {
    this.ss.GetSectionById(this.route.snapshot.paramMap.get("id")).subscribe(data => {
      this.section = data;
    })
    
  }

}
