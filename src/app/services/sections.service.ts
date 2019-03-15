import { TemplateRef } from '@angular/core';
import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SectionService{
    section:any;
    baseUrl:string='http://client.nomokoiw.beget.tech/box/';
    sections:Section[];
    deal:Deal;

    constructor(private http: HttpClient ) {
        this.GetSections();
    }
    GetSections() {
        return this.http.get<Section[]>(this.baseUrl + 'SectionsController.php?Key=get-sections').subscribe(data =>{
            this.sections = data;
        });
    }
    GetSectionById(id) {
        return this.http.get<Section>(this.baseUrl + 'SectionsController.php?Key=get-section&Id='+id)
    }
    AddDeal(deal) {
        return this.http.post<Deal>(this.baseUrl + 'SectionsController.php?Key=add-deal', deal);
    }
    ChangeSection(section, id){
        return this.http.post(this.baseUrl + 'SectionsController.php?Key=change-section&Id='+id, section );
    }
}

export class Section{
    SectionId:number;
    ModifyDate:Date;
    Name:string;
    Description:string;
    Price:number;
    Image:string;
    Adress:string;
}

export class Deal{
    DealId:number;
    SectionId:number;
    CreateDate:Date;
    Email:string;
    Phone:number;
    Name:string;

    Section:Section;
}