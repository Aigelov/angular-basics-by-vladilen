import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})
export class TodosService {

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) {}

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      MyCustomHeader: Math.random().toString()
    });
    return this.http.post<Todo>(
      this.url,
      todo,
      {
        headers
      }
    );
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');
    return this.http.get<Todo[]>(
        this.url,
        {
          params,
          observe: 'response'
        }
      )
      .pipe(
        map(response => {
          return response.body;
        }),
        delay(500),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    // noinspection JSDeprecatedSymbols
    return this.http.delete<any>(
        `${this.url}/${id}`,
        {
          observe: 'events'
        }
      )
      .pipe(
        tap(
          event => {
            if (event.type === HttpEventType.Sent) {
              // console.log('Sent', event);
            }
            if (event.type === HttpEventType.Response) {
              // console.log('Response', event);
            }
          },
          error => {},
          () => {}
        )
      );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(
      `${this.url}/${id}`,
      {
      completed: true
      },
      {
        responseType: 'json'
      }
    );
  }
}
