import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ConsultaCnpj',
  templateUrl: './ConsultaCnpj.component.html',
  styleUrls: ['./ConsultaCnpj.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    BrowserModule,
  ]
})
export class ConsultaCnpjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('jkndsjnvfdjkfnl')
  }

}
