import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AddUserFormComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  constructor(private dialog: MatDialog) {}

  protected openDialog(): void {
    this.dialog.open(AddUserFormComponent, {
      width: '250px',
    });
  }
}
