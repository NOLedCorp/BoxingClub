import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TemplateRef, Injectable } from '@angular/core';

@Injectable()
export class ModalService{
    modalRef: BsModalRef;
    modal:TemplateRef<any>;
    sectionId:string;
    
    constructor(private modalService: BsModalService){

    }
    
    close(){
        this.sectionId = "";
        this.modalRef.hide();
    }
    open(s){
        this.sectionId=s;
        this.modalRef = this.modalService.show(this.modal);
    }
}