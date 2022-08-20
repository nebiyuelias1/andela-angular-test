import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filter!: string;
  todos$!: Observable<Todo[]>;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.todos$ = this._apiService.getTodos()
  }

  onKeyUp() {
    this.todos$ = this._apiService.getTodos().pipe(
      map((t) => {
        return t.filter((x) => x.userId == parseInt(this.filter));
      })
    );
  }
}
