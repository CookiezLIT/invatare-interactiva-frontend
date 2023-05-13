import { Component } from '@angular/core';
import { Notes } from '../models/notes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent {
  notes: Notes[] = [
    { id: 1, title: 'Note 1', description: 'This is the first note', user_id: 1 },
    { id: 2, title: 'Note 2', description: 'This is the second note', user_id: 1 },
    { id: 3, title: 'Note 3', description: 'This is the third note', user_id: 2 }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  //TODO: update url
  getAllNotes(): Notes[] {
    // this.http.get<Notes[]>('http://example.com/notes').subscribe((response) => {
    //   this.notes = response;
    // });
    return this.notes;
  }

  //TODO: update url
  createNewNote(): void {
    const newNote: Notes = {
      id: 5,
      title: 'New Note',
      description: '',
      user_id: 1 // Replace with actual user ID
    };
    // this.http.post('http://example.com/notes', newNote).subscribe((response) => {  
    // });
  }

  deleteNote(note: Notes): void {
    // this.http.delete(`http://example.com/notes/${note.id}`).subscribe(() => {
    //   this.notes = this.getAllNotes();
    // });
  }


}
