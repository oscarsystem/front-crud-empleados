import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './components/empleado/add-edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-crud-empleados';

  constructor(private dialog: MatDialog){}

  openAddEditForm() {
    this.dialog.open(EditComponent);
  }
  
}
