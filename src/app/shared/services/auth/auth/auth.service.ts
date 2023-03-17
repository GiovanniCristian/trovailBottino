import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fiveAnswers = false;

  constructor() { }

  showSecretPage(){
    return this.fiveAnswers
  }

}
