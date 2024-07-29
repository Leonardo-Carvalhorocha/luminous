import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ConsultaCnpjComponent } from '../modules/ConsultaCnpj/ConsultaCnpj.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    ConsultaCnpjComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('olá')
  }

  handleClick() {
    this.router.navigate(['home/consultaCnpj'])
  }
}
