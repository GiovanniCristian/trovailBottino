import { IQuestion } from './../models/questions.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {



  constructor(private http:HttpClient){ }

  getQuestion(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>('https://the-trivia-api.com/api/questions?categories=film_and_tv,arts_and_literature,music&limit=7&region=IT&difficulty=easy')
  }
}
