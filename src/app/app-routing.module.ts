import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { AnswerComponent } from './pages/answer/answer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth/auth.guard';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "answer" , component: AnswerComponent},
  {path: "secret" , component: SecretPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
