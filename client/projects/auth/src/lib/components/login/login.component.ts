import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  redirectUrl: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.submitted)
      this.router.navigate(['home']);

    this.loginForm = this.formBuilder.group({
      username: ['panda', Validators.required],
      password: ['panda12345', Validators.required]
    });

    this.redirectUrl = this.route.snapshot.queryParams.redirectUrl || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.router.navigate(['home']);
  }

  get formValue() {
    return this.loginForm.controls;
  }
}
