import { Component } from '@angular/core';
import { Quiz } from '../models/quizz';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizz-app',
  templateUrl: './quizz-app.component.html',
  styleUrls: ['./quizz-app.component.scss']
})
export class QuizzAppComponent {
  quizzes: Quiz[] = [{"id":1,"question":"Sample Question 1","answers":["Answer 1-1","Answer 1-2","Answer 1-3"],"correct_answer":1},{"id":2,"question":"Sample Question 2","answers":["Answer 2-1","Answer 2-2","Answer 2-3"],"correct_answer":2},{"id":3,"question":"Sample Question 3","answers":["Answer 3-1","Answer 3-2","Answer 3-3"],"correct_answer":3},{"id":4,"question":"Sample Question 4","answers":["Answer 4-1","Answer 4-2","Answer 4-3"],"correct_answer":1},{"id":5,"question":"Sample Question 5","answers":["Answer 5-1","Answer 5-2","Answer 5-3"],"correct_answer":2}];
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
