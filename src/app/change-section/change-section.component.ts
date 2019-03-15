import { Component, OnInit } from '@angular/core';
import { SectionService, Section } from '../services/sections.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-section',
  templateUrl: './change-section.component.html',
  styleUrls: ['./change-section.component.less']
})
export class ChangeSectionComponent implements OnInit {
  show = false;
  sectionForm:FormGroup;
  section:Section;
  copy:Section;
  constructor(private ss:SectionService, private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit() {
    this.show = false;
    this.section = null;
    this.copy = null;
    this.sectionForm = this.fb.group({
      Name: [''],
      Price: [''],
      Adress: [''],
      Description: ['']
    });
    this.ss.GetSectionById(this.route.snapshot.paramMap.get("id")).subscribe(data => {
      this.section = data;
      this.copy = JSON.parse(JSON.stringify(this.section));
      this.sectionForm = this.fb.group({
        Name: [this.section.Name],
        Price: [this.section.Price],
        Adress: [this.section.Adress],
        Description: [this.section.Description]
      });
      
    })
    

  }
  check(){
    let res = false;
        Object.keys(this.sectionForm.value).forEach(k => {
          if(this.copy[k]!=this.sectionForm.value[k]){
            
            
            res = true;
          }
        });
        return res;
  }
  Update(){
    this.ss.ChangeSection({Keys:Object.keys(this.sectionForm.value), Values:Object.values(this.sectionForm.value)},this.section.SectionId).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    })
  }

}
