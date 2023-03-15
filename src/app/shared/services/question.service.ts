import { IQuestions } from './../models/questions.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {



  constructor(private http:HttpClient){ }

  getQuestion(){
    this.http.get<IQuestions>('https://the-trivia-api.com/api/questions?categories=film_and_tv,arts_and_literature,music&limit=1&region=IT&difficulty=easy')
  }
}
