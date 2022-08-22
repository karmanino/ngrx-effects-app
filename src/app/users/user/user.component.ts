import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { skip } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit, OnDestroy {

  user: User | undefined;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {
    this.router.params.subscribe(({ id }) => {
      if (!id || id > 12 || id < 0 ) id = 1;
      this.store.dispatch(loadUser({ id }));
    });
    this.store
      .select('user')
      .pipe(skip(1))
      .subscribe(({ user, loading, error }) => {
        this.user = user;
        this.error = error;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.user = undefined;
    this.error = null;
  }
}
