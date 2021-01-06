import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  fieldTextType: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        )
      ])
    });
  }

  get f() {
    return this.formGroup.controls;
  }
  loginProcess() {
    if (this.formGroup.valid) {
      this.router.navigate(["/list"], {
        queryParams: { sortType: "hightolow" }
      });
      sessionStorage.setItem("email", this.formGroup.value.email);
    } else {
      Swal.fire({
        title: "Invalid Mail or Password",
        text:
          "Password Atleast 8 Character with 1 lowercase,uppercase and special characer",
        icon: "error"
      });
    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
