import {Component, OnInit, Input} from '@angular/core';
import {PeopleService} from "../services/people.service";

@Component({
    selector: 'app-hello-solar-system',
    templateUrl: './hello-solar-system.component.html',
    styleUrls: ['./hello-solar-system.component.css']
})
export class HelloSolarSystemComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

// ------------------ Sibling component --------------------------

@Component({
    template: `
        <h3>This is Hello world!</h3>
    `
})
export class Hello {
    constructor(){
        console.log('Hello constructor');
    }
}

@Component({
    template: `
        <h3>Its the UI-Router hello world app!</h3>
    `
})
export class About {
    constructor(){
        console.log('About constructor');
    }
}

@Component({
    template: `
        <h3>Some people:</h3>
        <ul>
          <li *ngFor="let person of _people">
            <!--<a uiSref="person" [uiParams]="{ personId: person.id }">-->
            <a uiSref=".person" [uiParams]="{ personId: person.id }">
              {{person.name}}
            </a>
          </li>
        </ul>
        
        <ui-view></ui-view>
    `,
    providers: [PeopleService]
})
export class People {
    @Input() _people;

    constructor(){
        console.log('People constructor');
    }
}


export const helloState = {
    name: 'hello',
    url: '/hello',
    component: Hello
};

export const aboutState = {
    name: 'about',
    url: '/about',
    component: About
};

export const peopleState = {
    name: 'people',
    url: '/people',
    component: People,
    resolve: [
        {
            token: '_people',
            deps: [PeopleService],
            resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
        }
    ]
};