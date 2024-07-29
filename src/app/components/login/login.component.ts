import { Component, OnInit, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../services/auth/auth.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { catchError, pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from './model/User';
import { Router } from '@angular/router';
import { UtilService } from '../services/util/util.service';
import { ValidatorLogin } from './validators/validatorLogin';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  logoUrl = 'assets/img/logo.jpeg'
  user!: User;
  loadingState = { isLoading: false };
  token: string = '';
  hide = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private utilService: UtilService
  ) {
    this.form = this.formBuilder.group({
      username: ['', ValidatorLogin.userName],
      password: ['', ValidatorLogin.password]
    })
  }

  ngOnInit() {
    if(this.auth.getUserLocal()) {
      this.router.navigate(['/home'])
    }
  }

  login() {
    this.loadingState.isLoading = true;
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;

    if(username && password) {
      this.auth.GET_TOKEN_USER({username: username, password: password}, this.loadingState).subscribe()
    } else {
      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);
        const messageError = control?.getError('error');
        this.utilService.handleMsgError(messageError);
        console.log(messageError);
      })
      this.loadingState.isLoading = false;
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
