import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AmplifyService} from 'aws-amplify-angular'
@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  //@Output() closeModalEvent = new EventEmitter<boolean>();
  closeResult: string;
  @Input() restId: string;
  reviewText:string;
  

  
  private selectedLink: number;        
  
  setradio(e: number): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
  

  constructor(private modalService: NgbModal) {
    
  }
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  saveReview(reviewText){
    console.log("Review : "+reviewText);
    console.log("ID : "+this.restId);
    console.log("Rating : "+this.selectedLink);
  }

  // onCloseModal(event: any){
  //   this.closeModalEvent.emit(false);  
  //  }

}