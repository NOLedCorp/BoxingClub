import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Section, SectionService } from '../services/sections.service';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  @Input() sid:any;
  userForm:FormGroup;
  submitted = false;
  section:Section;
  constructor(private fb:FormBuilder, private ss:SectionService, private router:Router, private ms:ModalService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required, Validators.pattern]]
    });
    this.section=this.ss.sections.find(x => x.SectionId = this.sid);
  }
  SignUp(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    this.ss.AddDeal({SectionId:this.section.SectionId, Name:this.v.Name, Email:this.v.Email, Phone:this.v.Phone}).subscribe(data => {
      this.ss.deal = data;
      this.ms.close();
      this.router.navigate(['/success']);
    })
  }
  get f() { return this.userForm.controls; };
  get v() { return this.userForm.value; };

}
