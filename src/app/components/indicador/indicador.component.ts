import { Component, OnInit } from '@angular/core';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss'],
})
export class IndicadorComponent implements OnInit {
  indicadores:[];

  constructor(private indicadorService: IndicadorService) { }

  ngOnInit() {
    this.mostrarIndicadores();
  }

  mostrarIndicadores():void{
    this.indicadorService.obtenerindicador()
    .then(respuesta=>{
      this.indicadores = respuesta;
      console.log(this.indicadores)
    },
    (error)=>{
      console.log(error);
    })
  }

}
