import { Component } from '@angular/core';
import { Quiz } from '../models/quizz';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-quizz-app',
  templateUrl: './quizz-app.component.html',
  styleUrls: ['./quizz-app.component.scss']
})
export class QuizzAppComponent {
  quizzes: Quiz[] = [{"id":1,"question":"Ca să ajungeți la o perspectivă comuna asupra obiectivelor, trebuie să:","answers":["așteptați ordinele team leader-ului","trageți la sorți","votați și ascultați majoritatea","negociați prezentând argumente"],"correct_answer":1},{"id":2,"question":"Care este elementul cheie pentru implicarea tuturor membrilor în activitățile de echipă?","answers":["oferirea de recompense pentru participare","siguranța psihologică de la nivelul grupului","prezența constantă a leader-ului în timpul activităților de echipă", "amenințarea cu excluderea din echipă"],"correct_answer":2},{"id":3,"question":"Într-un climat de muncă orientat spre excelență,trebuie să stabiliți mai întâi:","answers":["standardele și metodele de lucru","momentele în care se vor lua pauzele","cine este șeful", "recompensele pentru fiecare membru al echipei"],"correct_answer":1},{"id":4,"question":"Prima măsură pecare o poți lua pentru a alege o sursă sigură este:","answers":["să nu citești de pe internet","să te uiți doar la știrile televizate","să verifici atent sursa", "să citești ziarele"],"correct_answer":1},{"id":5,"question":"Pentru a evita informațiile ieșite din actualitate, este indicat:","answers":["să fii mereu la curent cu ce se întâmplă","să verifici în fiecare zi toate sursele","să verifici data publicării", "să afli lucruri doar verbal, de la alții"],"correct_answer":2}];
  
  selectedAnswers: { [quizId: number]: number } = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<Quiz[]>('http://localhost:8000/get_all_quizez').subscribe(quizzes => {
    //   this.quizzes = quizzes;
    //   // Initialize selectedAnswers to -1 for each quiz
    //   this.quizzes.forEach(quiz => this.selectedAnswers[quiz.id] = -1);
    // });
  }

  submit(): void {
    let score = 0;
    this.quizzes.forEach(quiz => {
      if (this.selectedAnswers[quiz.id] == quiz.correct_answer) {
        score++;
      }
    });
    this.submitQuizResult(1,score);
    alert(`You scored ${score} out of ${this.quizzes.length}!`);
  }

  

  submitQuizResult(quizId: number, score: number) {

    const token = localStorage.getItem('token')
    console.log("THE TOKEN IS:")
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const body = {
      quiz_id: quizId,
      score: score
    };
    
    const response = this.http.post('http://localhost:8000/send_quiz_result',body, {headers});
    console.log(response);
    return;
  }
}
