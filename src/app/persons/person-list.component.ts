import { Component, OnInit } from '@angular/core';
import {IPerson} from './person'
import {PersonService} from './person.service';

@Component({  
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {


  pageTitle:string ="List of All Members in family";
  showImage :boolean = false;
  imageWidth :number=50;
  imageMargin :number=2;  
  filteredPersons:IPerson[];
  _listFilter: string;
  errorMessage:string;
  
  get listFilter(): string {
        return this._listFilter;
    }
  set listFilter(value: string) {
        this._listFilter = value;
        this.filteredPersons = this.listFilter ? this.performFilter(this.listFilter) : this.persons;
    }

  persons : IPerson[] =[];

  constructor(private _personService : PersonService){
      }

  toggleImage():void{
    this.showImage=!this.showImage;
  }
  
  
  performFilter(filterBy: string): IPerson[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.persons.filter((person:IPerson) =>
            person.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(){
    this._personService.getPersons()
            .subscribe( persons => {
                this.persons=persons;
                this.filteredPersons=this.persons;
              },
              error=>this.errorMessage=<any>error );
  }

}
