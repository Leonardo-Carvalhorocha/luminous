import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    BrowserModule,
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('jkndsjnvfdjkfnl')
  }

}
