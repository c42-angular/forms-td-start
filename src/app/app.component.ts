import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = "teacher";
  answer = '';
  genders = ['male', 'female'];
  userData = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    
    this.signupForm.form.patchValue({
      personalInfo: {
        username: suggestedName
      }
    });
  }

  // onSubmit(elementRef: NgForm) {
  //   console.log(elementRef);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;

    this.userData.username = this.signupForm.value.personalInfo.username;
    this.userData.email = this.signupForm.value.personalInfo.email;
    this.userData.secretQuestion = this.signupForm.value.secret;
    this.userData.answer = this.signupForm.value.questionAnswer;
    this.userData.gender = this.signupForm.value.genderSelection;
  }
}
