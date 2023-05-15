import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../add-edit/edit.component';
import { ConsultasEmpleadoService } from '../service/consultas-empleado.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  listEmpleados: any = [];
  displayedColumns: string[] = ['id', 'nombres', 'edad', 'cargo', 'email', 'action'];
  tamanoListaEmpleados: number = 0;

  constructor(private empleadoService: ConsultasEmpleadoService,
    private dialog: MatDialog){}
  
  ngOnInit(): void {
    this.listarEmpleados();
  }


  listarEmpleados(): void{    
    this.empleadoService.getAllEmpleados().subscribe(
      res => {
        this.listEmpleados = res;
        this.tamanoListaEmpleados = res.length;
      },
      err => console.log(err)
    );
  };

  editarEmpleado(data: any){
    const dialogRef = this.dialog.open(EditComponent, {data});
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if(val){
          this.listarEmpleados();
        }
      }
    });
  }

  eliminarEmpleado(empleado: any){
    this.empleadoService.deleteEmpleado(empleado.id)
    .subscribe(res => {this.listarEmpleados()}, err => console.log(err));    
  }
  
  openAddEditForm() {
    let dialogRef = this.dialog.open(EditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if(val){
          this.listarEmpleados();
        }
      }
    });
  }

}
