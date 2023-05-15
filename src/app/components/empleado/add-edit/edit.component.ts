import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ConsultasCargoService } from '../service/consultas-cargo.service';
import { ConsultasEmpleadoService } from '../service/consultas-empleado.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  requeridoFormControl = new FormControl('', [Validators.required]);
  edadFormControl = new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]);
  matcher = new MyErrorStateMatcher();

  listCargos: any = [];
  cargoSelect: any =[];

  empleadoCrear: any = {
    nombres: '',
    edad: '',
    email: '',
    cargo: null
  }

  constructor(private cargoService: ConsultasCargoService,
    private empleadoService: ConsultasEmpleadoService,
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router){
  };

  ngOnInit(): void{
    this.listarCargos();
    if(this.data){
      this.empleadoCrear = this.data;
    }
  }

  empleadoAccion(){
    if(this.data){
      this.empleadoService.updateEmpleado(this.empleadoCrear)
      .subscribe((data) => {this.dialogRef.close(true)}, err => {});
    }else{
      this.empleadoService.addEmpleado(this.empleadoCrear)
      .subscribe((data) => {this.dialogRef.close(true)}, err => {});
    }
    
  }

  listarCargos(): void{
    this.cargoService.getAllCargos().subscribe(
      res => {
        this.listCargos = res;
      }, err => console.log(err)
    );
  }
  

}
