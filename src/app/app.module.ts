import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { PersonListComponent } from './persons/person-list.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './persons/person.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonDetailComponent } from './persons/person-detail.component';
import { PersonModule } from './persons/person.module';


@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([    
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      
  ]),
  PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
