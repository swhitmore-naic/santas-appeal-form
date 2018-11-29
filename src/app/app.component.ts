import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Santas Appeal Form';
  bannerImg = environment.production ? '/santas-appeal-form//assets/images/SantaBanner.gif' : '/assets/images/SantaBanner.gif';
}
