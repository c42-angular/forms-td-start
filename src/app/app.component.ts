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

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      personalInfo: {
        username: suggestedName,
        email: ''
      },
      secret: 'teacher',
      questionAnswer: '',
      genderSelection: 'female' 
    });
  }

  // onSubmit(elementRef: NgForm) {
  //   console.log(elementRef);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
