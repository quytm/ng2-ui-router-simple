import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UIRouterModule} from "ui-router-ng2";
import {
    HelloSolarSystemComponent, People, peopleState,
    helloState, aboutState, Hello, About
} from "./hello-solar-system/hello-solar-system.component";
import {PeopleService} from "./services/people.service";
import {MyUIRouterConfig} from "./config/router.config";
import {PersonComponent, personState} from "./person/person.component";

@NgModule({
    declarations: [
        AppComponent,
        HelloSolarSystemComponent,
        Hello, About, People,
        PersonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UIRouterModule.forRoot({
            states: [helloState, aboutState, peopleState, personState],
            useHash: true,
            configClass: MyUIRouterConfig
        })
    ],
    providers: [
        PeopleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
