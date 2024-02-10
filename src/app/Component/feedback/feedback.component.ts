import { Component, OnInit } from '@angular/core';
import { feedback } from '../../data/Model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
    ngOnInit(): void {
      
    }
    feedback:feedback =  new feedback('','',2,'','');

    ngOninit():void{


    }
    submitFeedback(){
      console.log('feedback form is submitted', this.feedback)
    }
}
