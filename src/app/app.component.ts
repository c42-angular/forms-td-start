import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formObject: NgForm;
  defaultSelection: string = "teacher";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(elementRef: NgForm) {
  //   console.log(elementRef);
  // }

  onSubmit() {
    console.log(this.formObject);
  }
}
