import { Component } from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {id: 1, title: 'I want to learn Angular', text: `I'm still learning components`},
    {id: 2, title: 'Next block', text: `Will be about directives and pipes`},
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
