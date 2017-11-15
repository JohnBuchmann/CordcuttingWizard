import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { AuthService} from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.controls['email'].value;
    const password = form.controls['password'].value;

    this.authService.login(email, password);

  }

}
