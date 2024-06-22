import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../interfaces/user';
import { Store } from '@ngrx/store';
import { login, loginSuccess } from 'src/app/state/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  //@ts-ignore
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private store: Store<any>, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit(user: User): void {
    if(this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value
      // const password = this.loginForm.get('password')?.value

      this.auth.login(user).subscribe({
        next: (res) => {
          console.log(res)
          if(res.token) {
            this.router.navigate(['/home'])
          }
          this.store.dispatch(loginSuccess({token: res.token}))
        },
        error: (error) => {
          console.error('Erro ao tentar fazer o login', error)
        }
      })
      this.store.dispatch(login({email: email}))
    }
  }

}
