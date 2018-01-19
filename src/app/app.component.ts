import { Component } from '@angular/core';
import {PersonService} from './persons/person.service'

@Component({
  selector: 'ob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonService]
})
export class AppComponent {
  title = 'OnlineBhaat';
}
