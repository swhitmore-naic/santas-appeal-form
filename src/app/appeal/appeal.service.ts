import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AppealFormModel} from './appeal.model';

@Injectable({
  providedIn: 'root'
})
export class AppealService {
  private ageRanges;
  private naughtyOrNice;
  private leftCookies;

  constructor(private http: HttpClient) {
  }


  getAgeRanges(): Observable<any> {
    const ages = [ '1-12', '12-20', '21 - 30', 'Over the hill' ];

    return of(ages);
  }

  getNicenessValues(): Observable<any> {
    const niceness = [ 'naughty', 'nice' ];

    return of(niceness);
  }

}
