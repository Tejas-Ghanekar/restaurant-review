import {Component, Input, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AssessmentTemplateFilter } from 'aws-sdk/clients/inspector';
import { ActivatedRoute } from '@angular/router';
import { Review } from './api.service'
import { ApiService } from './api.service';
import { dateType } from 'aws-sdk/clients/sts';



@Component({
  selector: 'read-review-modal',
  templateUrl: './read-review-modal.html'
})
export class ReadReviewModal {
  //@Output() closeModalEvent = new EventEmitter<boolean>();
  resReviews: any = [];
  closeResult: string;
  IsmodelShow : boolean;
  
  @Input() restId: string;


  constructor(private modalService: NgbModal, private route:ActivatedRoute,private api:ApiService) {
  }

close(){
this.IsmodelShow = true;
}


  ngOnInit() {
    //this.getReviews();
   }
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }


  getReviews(){
    this.api.getReview(this.restId)
    .subscribe(data=>{
      for (const d of (data as any)){
        this.resReviews.push({
          id: d.id,
          restaurant_id: d.restaurant_id,
          customer_id: d.customer_id,
          review_text: d.review_text,
          rating: d.rating
        })
      }
      console.log(this.resReviews)  
    });
   
  }

}