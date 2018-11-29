import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppealFormModel} from './appeal.model';
import {AppealService} from './appeal.service';
import {Observable} from 'rxjs';
import {NotifierService} from 'angular-notifier';



@Component({
  selector: 'bh-appeal',
  templateUrl: './appeal.component.html',
  styleUrls: ['./appeal.component.scss']
})
export class AppealComponent implements OnInit {
  appealForm: FormGroup;
  addressForm: FormGroup;
  ageRanges$: Observable<any>;
  niceness$: Observable<any>;
  wishListMaxLength = 500;
  zipcodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Output() formSubmissionEvent: EventEmitter<AppealFormModel> = new EventEmitter();

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
    this.initAddressForm();
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
      zip: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  setDefaultValues() {
    this.appealForm.controls['ageRange'].setValue('1-12', {onlySelf: true});
    this.appealForm.controls['naughtyOrNice'].setValue('naughty', {onlySelf: true});
    this.appealForm.controls['leftCookies'].setValue('false', {onlySelf: true});
  }

  sendLetter() {
    this.notifierService.notify('default', 'Submitting...');
    setTimeout(() => {
      this.notifierService.notify('success', 'Form submitted to Santa!');
      const submittedForm = new AppealFormModel(this.appealForm.value, this.addressForm.value);
      this.formSubmissionEvent.emit(submittedForm);
      this.resetForms();
    }, 2000)
  }

  cancelSubmission() {
    this.notifierService.notify('default', 'The form has been reset');
    this.resetForms();
  }

  resetForms() {
    this.appealForm.reset();
    this.addressForm.reset();
    this.setDefaultValues();    
  }

}
