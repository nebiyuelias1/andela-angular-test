import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
