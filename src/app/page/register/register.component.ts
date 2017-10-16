import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  confirm: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }
  createForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
        this.validateEmail
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(35)
      ])],
      confirm: ['', Validators.required]
    },
      { validator: this.matchingPasswords('password', 'confirm') });
  }

  validateEmail(controls): any {
    const reg = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (reg.test(controls.value)) {
      return null;
    } else {
      return { 'validateEmail': true };
    }
  }

  matchingPasswords(password, confirm): any {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm].value) {
        return null;
      } else {
        return { 'matchingPasswords': true };
      }
    };
  }

  onRegister(): void {
    this.user = new User(
      this.form.get('username').value,
      this.form.get('email').value,
      this.form.get('password').value,
      this.form.get('confirm').value,
    );
    this.authService.addUser(this.user);
  }

  ngOnInit() {
  }

}
