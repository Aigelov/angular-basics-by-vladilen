import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post, PostsService} from './services/posts.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {

  constructor(
    private postsService: PostsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> | Promise<Post> | Post {
    // noinspection TypeScriptUnresolvedVariable
    return of(this.postsService.getById(+route.params.id))
      .pipe(
        delay(1000)
      );
  }
}
