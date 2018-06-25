import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {
  allcontacts$: Observable<Contact[]>;
  private searchTerms = new Subject<string>();
  constructor(private contactService: ContactService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.allcontacts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.contactService.searchContacts(term)),
    );
  }
}
//////////////////
// Push a search term into the observable stream.
  
  