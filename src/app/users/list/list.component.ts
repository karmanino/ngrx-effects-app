import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading:boolean = false;
  error: any;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.select('users').subscribe(({users, loading, error}) => {
      this.users = users
      this.loading = loading;
      this.error = error;
    })
  }

  viewUser(id: number){
    this.router.navigate(['/','user',id])
  }

}
