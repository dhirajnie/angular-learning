import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'abcd';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: ''
  }
  suggestUserName() {
    console.log("suggested username ")
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'my setted question',
    //   gender: 'male',
    //   adult: true
    // });

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.signUpForm.reset();

  }
}

