import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pdf', component: PdfViewComponent },
  {path: 'notes', component: NotesAppComponent},
  {path: 'quizz', component: QuizzAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
