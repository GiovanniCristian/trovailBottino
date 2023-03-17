import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnswerComponent } from './pages/answer/answer.component';
import { InputComponent } from './shared/components/input/input.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnswerComponent,
    InputComponent,
    SecretPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
