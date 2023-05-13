import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';
import { FileManagerAppComponent } from './file-manager-app/file-manager-app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewComponent,
    QuizzAppComponent,
    FileManagerAppComponent,
    NotesAppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
