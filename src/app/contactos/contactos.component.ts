import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
}
