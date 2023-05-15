import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';
import { LoginComponent } from './login-component/login-component.component';
import { AuthGuard } from './auth-guard-service';
import { QuizzResultsComponent } from './quizz-results/quizz-results.component';

const routes: Routes = [
  
  { path: 'pdf', component: PdfViewComponent },
  {path: 'notes', component: NotesAppComponent},
  {path: 'quizz', component: QuizzAppComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'results', component: QuizzResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
