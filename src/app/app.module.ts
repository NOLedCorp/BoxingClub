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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SectionsComponent,
    FooterComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
