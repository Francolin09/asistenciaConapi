import { Component, OnInit } from '@angular/core';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage {

  indicadores:any;

  constructor(private indicadorService: IndicadorService) {
    this.mostrarIndicadores()
   }

  ngOnInit() {
    this.mostrarIndicadores();
  }

  mostrarIndicadores():void{
    this.indicadorService.obtenerindicador()
    .then(respuesta=>{
      console.log('respueexx',respuesta.bitcoin)
      this.indicadores = respuesta;
      console.log(this.indicadores)
    },
    (error)=>{
      console.log(error);
    })
  }


}
