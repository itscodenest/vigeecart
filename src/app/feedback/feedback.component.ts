import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formGroup: FormGroup;err:string;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')],),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],),
      Phoneno: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/),Validators.maxLength(10)],),
      Feedback: new FormControl('', [Validators.required, Validators.maxLength(256)])
    })
  }
  get f(){
    return this.formGroup.controls;
  }
  storefeedback() {
    if (this.formGroup.valid) {
      const feedbackdetails: JSON = <JSON><unknown>{
        "firstname": this.formGroup.value.firstname,
        "lastname": this.formGroup.value.lastname,
        "email": this.formGroup.value.email,
        "Phoneno": this.formGroup.value.Phoneno,
        "Feedback": this.formGroup.value.Feedback
      }
      localStorage.setItem('details', JSON.stringify(feedbackdetails))
      var retrievedObject = localStorage.getItem('details');
      console.log(JSON.parse(retrievedObject))
      this.formGroup.reset();
      Swal.fire({
        title: "Feedback Submitted",
        text: "Check the console for submitted data",
        icon: "success",
      });
      
    }
    else {
      Swal.fire({
        title: "Invalid Feedback",
        text: "please fill all details",
        icon: "error",
      });

    }
  }

}
