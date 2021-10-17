import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  address = "35 songsparrows drive, toronto L6Y43Z, conatact No: +1-415678359";
  constructor() { }

  ngOnInit(): void {
  }

}
