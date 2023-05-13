import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';
import { FileManagerAppComponent } from './file-manager-app/file-manager-app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewComponent,
    QuizzAppComponent,
    FileManagerAppComponent,
    NotesAppComponent,
    HomePageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
