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
    const newNote: Notes = {
      id: 5,
      title: this.newNoteTitle,
      description: this.newNoteDescription,
      user_id: 1 // Replace with actual user ID
    };
    console.log("ADAUGAM NOUA NOTITA")
    console.log("TITLU" + this.newNoteTitle)
    console.log("DESCRIERE" + this.newNoteDescription)
    // this.http.post('http://example.com/notes', newNote).subscribe((response) => {  
    // });
  }

  deleteNote(note: Notes): void {
    // this.http.delete(`http://example.com/notes/${note.id}`).subscribe(() => {
    //   this.notes = this.getAllNotes();
    // });
  }


}
