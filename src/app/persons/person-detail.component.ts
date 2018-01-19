import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';
import { PersonService } from './person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({  
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  
  pageTitle:string = "Personal Detail"
  errorMessage:string;
  person:IPerson ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _personService: PersonService ) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: Number) {    
    this._personService.getPerson(id).subscribe(
      person => this.person = person,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/family']);
  }
  


}
