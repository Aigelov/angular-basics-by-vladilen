import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {id: 1, title: 'I want to learn Angular', text: `I'm still learning components`},
    {id: 2, title: 'Next block', text: `Will be about directives and pipes`},
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.clear();
      console.log('Timeout');
      this.posts[0] = {
        title: 'Changed!',
        text: 'Changed 2',
        id: 33
      };
    }, 2000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
