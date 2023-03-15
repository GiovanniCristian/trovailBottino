import { QuestionService } from './../../shared/services/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  answer: number = 0;

  try: any

  question: any

  success: string | undefined

  constructor(private questionService: QuestionService){ }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  };

  setAnswer(answer: any){
    this.answer = answer
  };

  getAnswer() {
    return this.questionService.apiQuestion.question;
  }

  tryAnswer(){
    if (this.answer === this.questionService.apiQuestion.answer) {
      return this.success
    }
  }
}

