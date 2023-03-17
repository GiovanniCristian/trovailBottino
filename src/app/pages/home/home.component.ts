import { IQuestion } from './../../shared/models/questions.model';
import { QuestionService } from './../../shared/services/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //definisco l'array che mi arriva e do anche undefined nel caso in cui non lo chiamassi
  questions: IQuestion[] | undefined;

  request: any;

  text: string = '';

  counterRightAnswers: number = 0;

  currentQuestion: number = 0;

  totalQuestions: number = 10;

  //importo il servizio che contiene la chiamata API in get
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  // per settare il valore di quello che scrivo nel mio input //
  setValue(text: any) {
    this.text = text.target.value;
  }

  // funzione per eseguire un conteggio delle risposte giuste
  countCorrectAnswer(): void {
    this.counterRightAnswers++;
    //localstorage per salvare in locale dati che posso riprendere altrove
    localStorage.setItem(
      'countRightAnswers',
      this.counterRightAnswers.toString()
    );
  }

  incrementCurrentQuestion(): void {
    this.currentQuestion++;
  }

  //da rete sulla consolle ho visto che mi arriva un array quindi inserisco [] per avere l'array di dati
  getQuestion(): void {
    if (!this.isGameEnded()) {
      this.request = this.questionService
        .getQuestion()
        .subscribe((res: IQuestion[]) => {
          this.questions = res;
          this.incrementCurrentQuestion();
        });
    }
  }

  isGameEnded(): boolean {
    return this.currentQuestion === this.totalQuestions;
  }

  tryAnswer(): void {
    // se questions non è undefined e text (ciò che scrivo in input) è uguale alla risposta alla domanda allora: //
    if (
      this.questions &&
      this.text.trim().toLowerCase() ===
        this.questions[0].correctAnswer.trim().toLowerCase()
    ) {
      // se la condizione è vera, il counter si aggiorna e si salva in locale
      this.countCorrectAnswer();
    } else {
      console.log('Risposta Sbagliata');
    }
    this.getQuestion();
  }

  // chiudo la subscribe nell'ondestroy quando si chiude il componente nel browser
  ngOnDestroy(): void {
    if (this.request) {
      this.request.unsubscribe();
    }
  }
}
