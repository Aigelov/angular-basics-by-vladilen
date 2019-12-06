import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 2000);
  });

  date$: Observable<Date> = new Observable(observer => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });
  dateInfo: Date;

  ngOnInit() {
    this.date$.subscribe(date => {
      this.dateInfo = date;
    });
  }
}
