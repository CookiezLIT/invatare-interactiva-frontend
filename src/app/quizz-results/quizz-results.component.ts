import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quizz-results.component.html',
  styleUrls: ['./quizz-results.component.scss']
})
export class QuizzResultsComponent implements OnInit {
  quizResults: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuizResults();
  }

  getQuizResults(): void {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    this.http.get<any[]>('http://localhost:8000/quizzes_results', { headers }).subscribe(
      data => {
        this.quizResults = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
