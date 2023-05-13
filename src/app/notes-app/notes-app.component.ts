import { Component } from '@angular/core';
import { Notes } from '../models/notes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent {
  notes: Notes[] = [
    { id: 1, title: 'Dummy Note 1', description: 'This is the first note', user_id: 1 },
    { id: 2, title: 'Dummy Note 2', description: 'This is the second note', user_id: 1 },
    { id: 3, title: 'Dummy Note 3', description: 'This is the third note', user_id: 2 }
  ];

  newNoteTitle: string;
  newNoteDescription: string;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    const token = localStorage.getItem('token')
    console.log("THE TOKEN IS:")
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.get<Notes[]>('http://localhost:8000/notes', { headers }).subscribe(
      response => {
        this.notes = response;
      },
      error => {
        console.log('Get notes error:', error);
      }
    );
    return this.notes;
  }

  //TODO: update url
  createNewNote(): void {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    });

    const requestBody = {
      'title': this.newNoteTitle,
      'content': this.newNoteDescription,
    };

    this.http.post('http://localhost:8000/create_note', requestBody, { headers })
  .subscribe(
    (response) => {
      console.log('POST request successful: ', response);
    },
    (error) => {
      console.error('POST request failed: ', error);
    }
  );
  }

  deleteNote(note: Notes): void {
    // this.http.delete(`http://example.com/notes/${note.id}`).subscribe(() => {
    //   this.notes = this.getAllNotes();
    // });
  }


}
