import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevService } from './dev.service';
import _ from 'lodash';

interface upId {
  _id: string
}

@Component({
  selector: 'lib-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  registerNewDevForm: FormGroup;
  submitted: boolean = false;
  redirectUrl: string;
  error: string;
  editParams: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpDev: DevService,
  ) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.editParams = params;
        if (params != null)
          this.bindFormValue(params);
      },
      err => console.error(err.message || err));
  }

  bindFormValue(params) {
    const { username, email, phoneNumber, skillSets, hobby } = params;

    this.registerNewDevForm = this.formBuilder.group({
      username: [username, Validators.required],
      email: [email, Validators.required],
      phoneNumber: [phoneNumber, Validators.required],
      skillSets: [skillSets, Validators.required],
      hobby: [hobby, Validators.required]
    });
  }

  onSubmit() {
    if (this.registerNewDevForm.invalid) {
      this.error = 'Please fill in all the mandatory fields';
      return;
    }

    if (!_.isEmpty(this.editParams)) {
      this.updateUser(this.editParams);
      return this.router.navigate(['home']);
    }

    var user = `{
      username: "${this.formValue.username.value}",
      email: "${this.formValue.email.value}",
      phoneNumber: "${this.formValue.phoneNumber.value}",
      skillSets: "${this.formValue.skillSets.value}",
      hobby: "${this.formValue.hobby.value}"
    }`;

    this.httpDev.createUser(user)
      .subscribe((res: any) => {
        console.log('res: ', res);
      },
      err => {
        console.log(err.message || err);
      });

      this.router.navigate(['home']);
  }

  updateUser(params) {
    var user = `{
      username: "${this.formValue.username.value}",
      email: "${this.formValue.email.value}",
      phoneNumber: "${this.formValue.phoneNumber.value}",
      skillSets: "${this.formValue.skillSets.value}",
      hobby: "${this.formValue.hobby.value}"
    }`;

    this.httpDev
      .updateUser(params._id, user)
      .subscribe((res: any) => {
        console.log('res: ', res);
      },
      err => console.log(err.message || err));
  }

  get formValue() {
    return this.registerNewDevForm.controls;
  }
}
