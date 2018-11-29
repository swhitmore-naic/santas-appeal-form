import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';
import { AppealFormModel } from './appeal/appeal.model';

@Component({
  selector: 'bh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  bannerImg = environment.production ? '/santas-appeal-form//assets/images/SantaBanner.gif' : '/assets/images/SantaBanner.gif';
  showCongratsPage = false;
  formContent: AppealFormModel;

  pushSubmittedFormContent(formContent) {
    this.formContent = formContent;
    this.toggleCongratsPage();
    console.log()
  }

  toggleCongratsPage() {
    this.showCongratsPage = !this.showCongratsPage;
  }
}
