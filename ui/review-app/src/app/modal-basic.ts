import {Component, Input, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AssessmentTemplateFilter } from 'aws-sdk/clients/inspector';
import { ActivatedRoute } from '@angular/router';
import { Review } from './api.service'
import { ApiService } from './api.service';
import { dateType } from 'aws-sdk/clients/sts';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  //@Output() closeModalEvent = new EventEmitter<boolean>();
  closeResult: string;
  @Input() restId: string;

  private ratings: number;    
  private username: string;
  public review : Review; 
  public timestamp : number;

  setradio(e: number): void   
  {  
    this.ratings = e;     
  }  
  
  constructor(private modalService: NgbModal, private route:ActivatedRoute,private api:ApiService) {
    this.route.params.subscribe(params =>{
      this.username = params['username']
    })  
    
  }
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  saveReview(reviewText){
    this.review = new Review();
    this.review.customer_id = this.username;
    this.review.rating = this.ratings;
    this.review.restaurant_id = this.restId;
    this.review.resReviewText = reviewText;
    this.review.reviewTimestamp = Date.now();
    let body = JSON.stringify({body:this.review});
    this.api.postReview(this.review)
     .subscribe(
       success => console.log(),
       error => alert(error)
     );
    console.log(this.review);
    // console.log("Review : "+reviewText);
    // console.log("ID : "+this.restId);
    // console.log("Rating : "+this.ratings);
    // console.log("User is : "+this.username)

  }

  // onCloseModal(event: any){
  //   this.closeModalEvent.emit(false);  
  //  }

}