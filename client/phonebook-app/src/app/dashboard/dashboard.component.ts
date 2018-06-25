import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allcontacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(allcontacts => this.allcontacts = allcontacts.slice(1, 5));
  }
}




 
