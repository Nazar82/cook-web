import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  user: User;
  username: string;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();

  }

  createForm() {
    this.form = this.formBuilder.group({
      email: '',
      username: '',
      password: '',
      confirm: ''
    });
  }
onRegister() {
  this.user = new User (
    this.form.get('username').value,
    this.form.get('email').value,
    this.form.get('password').value
  );
 console.log(this.user);
this.authService.addUser(this.user);

}


  ngOnInit() {
  }

}
