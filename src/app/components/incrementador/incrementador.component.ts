import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {
 
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
 
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor:number ){

    if(this.progreso >=100 && valor >=0 ){
      this.valorSalida.emit(100);
       this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0 ){
      this.valorSalida.emit(0);
       this.progreso = 0;
    }
       this.progreso = this.progreso + valor;
       this.valorSalida.emit(this.progreso);
  }

  onChangue(event: number){

    if(event >= 100){
      Swal.fire({
        title:'error',
        icon:'error',
        text:'el numero sobrepasa el esperado'
      })
      this.progreso = 100;
    }else if(event <= 0){
      this.progreso = 0;
    }else{
      this.progreso = event;
    }

     this.valorSalida.emit(this.progreso);
    
    
  }


}
