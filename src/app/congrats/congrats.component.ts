import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bh-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent implements OnInit {
  @Input() formContent: any;
  @Output() goBackEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formContent.leftCookies = this.formContent.leftCookies === 'true' ? true : false;

    this.cleanZipCode(this.formContent.address.zip);
  }

  cleanZipCode(zip) {
    const zipParts = zip.split('');
    const zipPartsCleansed = zipParts.filter(z => z !== '_');

    if (zipPartsCleansed.length < 7) {
      zipPartsCleansed.pop();
    }    
    this.formContent.address.zip = zipPartsCleansed.join('');
  }

  goBack() {
    this.goBackEvent.emit();
  }

}
