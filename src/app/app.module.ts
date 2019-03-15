import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SectionService } from './services/sections.service';
import { SectionComponent } from './section/section.component';
import { SuccessComponent } from './success/success.component';
import { ChangeSectionComponent } from './change-section/change-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SectionsComponent,
    FooterComponent,
    ModalComponent,
    SignUpComponent,
    SectionComponent,
    SuccessComponent,
    ChangeSectionComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService, SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
