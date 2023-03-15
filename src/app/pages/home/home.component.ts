import { IQuestions } from './../../shared/models/questions.model';
import { QuestionService } from './../../shared/services/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  questions: IQuestions[] = new Array<IQuestions>();

  request: any;

  constructor(private questionService: QuestionService){ }

  ngOnInit(): void {
    this.request = this.questionService.getQuestion().subscribe((res: IQuestions) => {
      this.questions = res.IQuestions;
      console.log(res.IQuestions);
    })
  };

  ngOnDestroy(): void {
    if (this.request){
      this.request.unsubscribe();
    }
  }

}

