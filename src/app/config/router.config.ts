import {UIRouter} from "ui-router-ng2";
// import {StateTree} from "ui-router-visualizer";
import {Inject, Injectable} from "@angular/core";
import {PeopleService} from "../services/people.service";

/** UIRouter Config  */
@Injectable()
export class MyUIRouterConfig {
    constructor(@Inject(PeopleService) peopleService,
                @Inject(UIRouter) router: UIRouter) {
        // Plunker embeds can time out.
        // Pre-load the people list at startup.
        peopleService.getAllPeople();

        // If no URL matches, go to the `hello` state by default
        // router.urlRouterProvider.otherwise(() => router.stateService.go('hello'));

        // Use ui-router-visualizer to show the states as a tree
        // StateTree.create(router, document.getElementById('statetree'), { width: 200, height: 100 });
    }
}