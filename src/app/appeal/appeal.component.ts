import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppealFormModel} from './appeal.model';
import {AppealService} from './appeal.service';
import {Observable} from 'rxjs';
import { NotifierService } from 'angular-notifier';



@Component({
  selector: 'app-appeal',
  templateUrl: './appeal.component.html',
  styleUrls: ['./appeal.component.scss']
})
export class AppealComponent implements OnInit {
  appealForm: FormGroup;
  addressForm: FormGroup;
  ageRanges$: Observable<any>;
  niceness$: Observable<any>;
  wishListMaxLength = 500;

  constructor(private fb: FormBuilder,
              private appealService: AppealService,
              private notifierService: NotifierService) {
  }

  ngOnInit() {
    this.ageRanges$ = this.appealService.getAgeRanges();
    this.niceness$ = this.appealService.getNicenessValues();
    this.buildForms();
  }

  buildForms() {
    this.initAppealForm();
    this.initAddressForm()
  }

  initAppealForm() {
    this.appealForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ageRange: '',
      wishList: ['', Validators.required],
      naughtyOrNice: '',
      leftCookies: '',
    });
    this.setDefaultValues();
  }

  initAddressForm() {
    this.addressForm = this.fb.group({
      street1: ['', Validators.required],
      street2: '',
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  setDefaultValues() {
    this.appealForm.controls['ageRange'].setValue('1-12', {onlySelf: true});
    this.appealForm.controls['naughtyOrNice'].setValue('naughty', {onlySelf: true});
    this.appealForm.controls['leftCookies'].setValue('false', {onlySelf: true});
  }

  sendLetter() {
    console.log(this.appealForm.value);
    console.log(this.addressForm.value);
    const submittedForm = new AppealFormModel(this.appealForm.value, this.addressForm.value);
    this.appealService.submitForm(submittedForm).subscribe(response => {
      this.notifierService.notify('success', 'Your request has been sent to Santa!');
    }, response => {
      this.notifierService.notify('error', 'There was a problem: ' + response.message);
    });
  }

  resetForm() {
    this.appealForm.reset();
    this.addressForm.reset();
    this.setDefaultValues();
    this.notifierService.notify('default', 'The form has been reset');
  }

}
