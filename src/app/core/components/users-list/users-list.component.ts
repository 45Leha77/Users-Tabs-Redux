import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { select, Store } from '@ngrx/store';
import {
  BehaviorSubject,
  debounceTime,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { User } from '../../models/user.interface';
import { getUsers } from '../../store/state/users.selector';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  private searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  protected filteredUsers$: Observable<User[]> = this.searchValue.pipe(
    debounceTime(500),
    switchMap((searchValue: string) => {
      return this.loadAndSearch(searchValue);
    })
  );
  constructor(private store: Store) {}

  protected search(searchValue: string): void {
    return this.searchValue.next(searchValue);
  }

  private loadAndSearch(searchValue: string): Observable<User[]> {
    return this.store.pipe(
      select(getUsers),
      map((users: User[]) => {
        return users.filter((user: User) => user.email.match(searchValue));
      })
    );
  }
}
