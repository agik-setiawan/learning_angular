import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  async login() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    return (await this.authService.login(this.loginForm.value)).subscribe(function (res) {
      console.log(res);
    });
  }


  ngOnInit(): void {
  }

}
