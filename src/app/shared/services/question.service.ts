import { IQuestions } from './../models/questions.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  apiQuestion =
    {
      "question": "How old is Mark Hoppus?",
      "answer": 51
    }

  constructor(){ }

}
