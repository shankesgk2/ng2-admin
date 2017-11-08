import { JwtHelperService} from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class Login {
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public jwtHelper: JwtHelperService;

  constructor(fb: FormBuilder,private http: HttpClient, private router: Router) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit(): void{
    const token = this.jwtHelper.tokenGetter();
    if (token != null){
        if (!this.jwtHelper.isTokenExpired(token)){
          this.router.navigate(['/']);
        }
    }
  }
  public onSubmit(values: Object): void {
    this.submitted = true;
    // values.observe = 'response';
    if (this.form.valid) {
      console.log(values);
      this.http.post('login', values).subscribe(data => {
        console.log(data['status_code']);
        console.log(data);
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/']);
      });
    }
  }
}
