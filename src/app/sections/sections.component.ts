import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { SectionService } from '../services/sections.service';

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.less']
})
export class SectionsComponent implements OnInit {
  @Input() ss:SectionService;
  @ViewChild('sections') s:HTMLDivElement;
  constructor() { }

  ngOnInit() {
    this.ss.section = this.s;
  }

}
