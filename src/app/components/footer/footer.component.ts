import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
   MatCardModule
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
