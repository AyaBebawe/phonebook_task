import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
//import { CONTACTS } from '../mock-contacts';
import { ContactService} from '../contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  //allcontacts = CONTACTS;//Add a heroes property to the class that exposes these heroes for binding.
  allcontacts: Contact[];
  
  //selectedContact: Contact;
  constructor(private contactService: ContactService) {
   }
  
   
  ngOnInit() {
    this.getContacts();
  }
 

 // onSelect(contact: Contact): void {
   // this.selectedContact = contact;
  //}
  getContacts(): void {
    this.contactService.getContacts().subscribe(allcontacts => this.allcontacts = allcontacts);
  }
/*
  add(contactfirstname: string,contactsecondname:string,contactphonenumber :string): void {
    contactfirstname = contactfirstname.trim();
    contactsecondname = contactsecondname.trim();
    contactphonenumber = contactphonenumber.trim();

    if (!contactfirstname) { return; }
    this.contactService.addContact({contactfirstname} as Contact)
      .subscribe(contact => {
        this.allcontacts.push(contact);
      });
  }
  */
 add(contactfirstname: string,id:number): void {
  contactfirstname = contactfirstname.trim();
  //contactsecondname = contactsecondname.trim();
  //contactphonenumber = contactphonenumber.trim();


  if (!contactfirstname) { return; }
 this.contactService.addContact({id}  as Contact)
    .subscribe(contact => {
      this.allcontacts.push(contact);
    });}
    
    delete(contact: Contact): void {
      this.allcontacts= this.allcontacts.filter(h => h !== contact);
      this.contactService.deleteContact(contact).subscribe();
    }

}


