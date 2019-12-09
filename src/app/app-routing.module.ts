import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {ErrorComponent} from './error/error.component';
import {AuthGuard} from './auth.guard';
import {PostResolver} from './post.resolver';

// http://localhost: 4200/ -> HomeComponent
// http://localhost: 4200/about -> AboutComponent
// http://localhost: 4200/about/extra -> AboutExtraComponent
// http://localhost: 4200/posts -> PostsComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: 'extra', component: AboutExtraComponent}
    ]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
