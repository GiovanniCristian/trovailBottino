import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  showSecretPage() {
    // richiamo i dati del local storage per dire che se count arriva a 5 allora devi settare
    // la variabile fiveAnswer a true
    return (localStorage.getItem('countRightAnswers') === '5')
  };
}
