import { IQuestion } from './../../shared/models/questions.model';
import { QuestionService } from './../../shared/services/question.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit, OnDestroy {
  answers: IQuestion[] = [];

  sub: any;

  constructor(private answerService: QuestionService) {}

  //applico la funzione all'init del componente
  ngOnInit(): void {
    this.getAllAnswer();
  }

  getAllAnswer() {
    return (this.sub = this.answerService
      .getQuestion()
      .subscribe((res: IQuestion[]) => {
        this.answers = res;
        console.log(res);
      }));
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
