import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    BrowserModule,
  ]
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('jkndsjnvfdjkfnl')
  }

}
