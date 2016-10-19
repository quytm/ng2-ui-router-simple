import {Component, OnInit, Input} from '@angular/core';
import {Transition} from "ui-router-ng2";
import {PeopleService} from "../services/people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person;

  constructor() {
    console.log('PersonComponent constructor');
  }

  ngOnInit() {
  }

}

export const personState = {
  // name: 'person',
  // url: '/people/:personId',
  // component: PersonComponent,
  // resolve: [
  //   {
  //     token: 'person',
  //     deps: [Transition, PeopleService],
  //     resolveFn: (trans, peopleSvc) => peopleSvc.getPerson(trans.params().personId)
  //   }
  // ]

  name: 'people.person',
  url: '/:personId',
  component: PersonComponent,
  resolve: [
    {
      token: 'person',
      deps: [Transition, '_people'],
      resolveFn: (trans, people) =>
          people.find(person => person.id === trans.params().personId)
    }
  ]
};
