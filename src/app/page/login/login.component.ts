import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string;


  constructor(
    private formBuilder: FormBuilder,
    private authService:  AuthService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
     });
  }

  onLogin() {
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };

    this.authService.login(user).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
  );
  }

  ngOnInit() {
  }

}
