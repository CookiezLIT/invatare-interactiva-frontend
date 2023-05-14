import { Component } from '@angular/core';
import { Quiz } from '../models/quizz';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizz-app',
  templateUrl: './quizz-app.component.html',
  styleUrls: ['./quizz-app.component.scss']
})
export class QuizzAppComponent {
  quizzes: Quiz[] = [];
  selectedAnswers: { [quizId: number]: number } = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Quiz[]>('http://localhost:8000/get_all_quizez').subscribe(quizzes => {
      this.quizzes = quizzes;
      // Initialize selectedAnswers to -1 for each quiz
      this.quizzes.forEach(quiz => this.selectedAnswers[quiz.id] = -1);
    });
  }

  submit(): void {
    let score = 0;
    this.quizzes.forEach(quiz => {
      if (this.selectedAnswers[quiz.id] == quiz.correct_answer) {
        score++;
      }
    });
    alert(`You scored ${score} out of ${this.quizzes.length}!`);
  }
}
