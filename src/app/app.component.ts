import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';
  posts: Post[] = [
    {title: 'Chargin network', text: `Electric car owners could get more than 1,000 miles of free driving per year thanks`},
    {title: 'United Kingdom', text: `Volkswagen announced last year that it had partnered with Tesco and Pod Point`},
    {title: 'First time', text: `To highlight the scheme, Volkswagen visited the Potters Bar store in Hertfordshire`}
  ];

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: `Vladilen's Angular 8 course`
    });
  }
}
