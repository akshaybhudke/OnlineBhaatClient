import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'family', component: PersonListComponent },
      { path: 'family/:id',      
      component: PersonDetailComponent }
    ])
  ],
  declarations: [
    PersonDetailComponent,
    PersonListComponent
  ],
  providers:[
    PersonService
  ]
})
export class PersonModule { }
