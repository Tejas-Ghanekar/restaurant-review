import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;
  @Input() restId: string;
  reviewText:string;

  constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  saveReview(reviewText){
    console.log("Review : "+reviewText);
    console.log("ID : "+this.restId);
  }
}