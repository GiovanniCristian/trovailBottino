import { IQuestion } from './../../shared/models/questions.model';
import { QuestionService } from './../../shared/services/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  //definisco l'array che mi arriva e do anche undefined nel caso in cui non lo chiamassi
  questions: IQuestion[] | undefined;

  request: any;

  text: string = '';

  //importo il servizio che contiene la chiamata API in get
  constructor(private questionService: QuestionService){ }

  ngOnInit(): void {

  };

  // per settare il valore di quello che scrivo nel mio input //
  setValue(text: any){
    this.text = text.target.value
  };

  count : number = 0;
  counter(): any{
    if(this.questions && this.text.trim().toLowerCase() === this.questions[0].correctAnswer.trim().toLowerCase()){
      return this.count++
    } else {this.count = 0}
  };

  //da rete sulla consolle ho visto che mi arriva un array quindi inserisco [] per avere l'array di dati
  getQuestion(){
    return this.request = this.questionService.getQuestion().subscribe((res: IQuestion[]) => {
      this.questions = res;
      console.log(res);
    })
  };

  tryAnswer() {
    // se questions non è undefined e text (ciò che scrivo in input) è uguale alla risposta alla domanda allora: //
    if(this.questions && this.text.trim().toLowerCase() === this.questions[0].correctAnswer.trim().toLowerCase()){
      console.log('risposta giusta');
    } else {
      console.log('Risposta Sbagliata')
    }
  };

  ngOnDestroy(): void {
    if (this.request){
      this.request.unsubscribe();
    }
  };

}

