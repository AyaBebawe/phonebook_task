import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const allcontacts = [
        { id: 0, firstname: ' Aya',secondname:'Hassan',phonenumber:'0101202122' },
        { id: 1, firstname: 'Nouran',secondname:'Ashraf',phonenumber:'0101202122' },
        { id: 2,firstname: 'Alaa',secondname:'Abas',phonenumber:'0101202122' },
        { id: 3, firstname: 'Aml',secondname:'Assar',phonenumber:'0101202122' },
        { id: 4, firstname: 'Marwan',secondname:'Mohamed',phonenumber:'0101202122' },
        { id: 5, firstname: 'Mohamed',secondname:'Abas',phonenumber:'0101202122' },
        { id: 6,firstname: 'Ahmed',secondname:'Hamed',phonenumber:'0101202122' },
        { id: 7, firstname: 'Ibrahim',secondname:'Mohmed',phonenumber:'0101202122' },
        { id: 8, firstname: 'shayma',secondname:'Ibrahim',phonenumber:'0101202122' },
        { id: 9, firstname: 'Mahmoud',secondname:'Mohamed',phonenumber:'0101202122' }
    ];
    return {allcontacts};
  }
}