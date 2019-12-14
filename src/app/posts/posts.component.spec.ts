import { PostsService } from './posts.service';
import { PostsComponent } from './posts.component';
import { EMPTY, of, throwError } from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService(null);
    component  = new PostsComponent(service);
  });

  // In ngOnInit method fetch
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch')
      .and
      .callFake(() => {
        return EMPTY;
      });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  // posts variable
  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4];
    spyOn(service, 'fetch')
      .and
      .returnValue(of(posts));
    component.ngOnInit();
    expect(component.posts.length).toBe(posts.length);
  });

  it('should add new post', () => {
    const post = {title: 'test'};
    const spy = spyOn(service, 'create')
      .and
      .returnValue(of(post));
    component.add(post.title);
    expect(spy).toHaveBeenCalled();
    // noinspection TypeScriptUnresolvedFunction
    expect(component.posts.includes(post)).toBeTruthy();
    // expect(component.posts.length).toBe(1);
  });

  it('should set message to error message', () => {
    const error = 'Error message';
    spyOn(service, 'create')
      .and
      .returnValue(throwError(error));
    component.add('Post title');
    expect(component.message).toBe(error);
  });

  it('should remove post if user confirms', () => {
    const spy = spyOn(service, 'remove')
      .and
      .returnValue(EMPTY);
    spyOn(window, 'confirm')
      .and
      .returnValue(true);
    component.delete(10);
    expect(spy).toHaveBeenCalledWith(10);
  });

  it(
    `should NOT remove post if user doesn't confirm`,
    () => {
      const spy = spyOn(service, 'remove')
        .and
        .returnValue(EMPTY);
      spyOn(window, 'confirm')
        .and
        .returnValue(false);
      component.delete(10);
      // noinspection TypeScriptUnresolvedVariable
      expect(spy).not.toHaveBeenCalled();
    }
  );
});