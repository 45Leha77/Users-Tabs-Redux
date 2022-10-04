import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.interface';
import { Store } from '@ngrx/store';
import { createUser } from '../../store/state/users.actions';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserFormComponent {
  constructor(private store: Store, private dialog: MatDialog) {}
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    info: new FormControl(''),
  });

  protected onFormSubmit(): void {
    const user: User = {
      ...this.form.value,
      id: this.createID(),
    };
    this.store.dispatch(createUser({ user }));
    this.dialog.closeAll();
  }

  private createID(): string {
    return `${new Date().getTime()}`;
  }
}
