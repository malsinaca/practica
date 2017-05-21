import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HTTPService} from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form declaration
  username = new FormControl('')
  password = new FormControl('')

  loginForm: FormGroup;

  // Request answer variables
  private alertMessage: string;
  private loginSuccess: boolean;
  private loginFail: boolean;

  constructor( private httpService: HTTPService, private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  login() {
    // Reset last values
    this.loginSuccess = null;
    this.loginFail = null;
    // Recover selected page
    const username = this.username.value;
    const password = this.password.value;
    // Request login
    // (service will retrieve promise)
    this.httpService.checkLogin(username, password)
    // Handle server response
      .then(data => {
        const response: any = data;
        console.log('SERVER SAYS: ');
        console.log('Status:' + response.status);
        console.log('Message:' + response.message);
        if (response.status === 'KO') {
          // Server answer KO
          this.loginFail = true;
        } else {
          // Server answer OK
          this.loginSuccess = true;
        }
      })
      // Handle errors
      .catch(error => {
        this.alertMessage = error;
      });

  }

}
