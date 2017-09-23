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
  }
}
