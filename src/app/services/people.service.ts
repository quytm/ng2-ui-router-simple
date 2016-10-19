import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class PeopleService {
    cache = null;

    constructor(@Inject(Http) public http: Http) {
        console.log('PeopleService constructor');
    }

    getAllPeople() {
        // return this.cache = this.cache || this.http.get('../data/people.json')
        //         .map(resp => resp.json())
        //         .toPromise();
        return Promise.resolve(data);
    }

    getPerson(id) {
        function personMatchesParam(person) {
            return person.id === id;
        }

        return this.getAllPeople()
            .then(people => people.find(personMatchesParam));
    }

}

const data = [
    {
        "id": "293",
        "isActive": false,
        "eyeColor": "brown",
        "name": "Ingrid Townsend",
        "company": "JASPER",
        "email": "ingridtownsend@jasper.com",
        "address": "690 Charles Place, Santel, Northern Mariana Islands, 3791"
    },
    {
        "id": "581",
        "isActive": true,
        "eyeColor": "blue",
        "name": "Estrada Nolan",
        "company": "FIBRODYNE",
        "email": "estradanolan@fibrodyne.com",
        "address": "317 Seeley Street, Cade, Maryland, 3976"
    },
    {
        "id": "29",
        "isActive": true,
        "eyeColor": "brown",
        "name": "Laverne Andrews",
        "company": "INTRAWEAR",
        "email": "laverneandrews@intrawear.com",
        "address": "760 Provost Street, Valle, Alaska, 4628"
    },
    {
        "id": "856",
        "isActive": false,
        "eyeColor": "green",
        "name": "Hull Woodward",
        "company": "SENMAO",
        "email": "hullwoodward@senmao.com",
        "address": "452 Union Avenue, Hachita, Palau, 9166"
    },
    {
        "id": "2321",
        "isActive": false,
        "eyeColor": "green",
        "name": "Maria Stanley",
        "company": "EYERIS",
        "email": "mariastanley@eyeris.com",
        "address": "350 Remsen Avenue, Abrams, Ohio, 6355"
    }
]