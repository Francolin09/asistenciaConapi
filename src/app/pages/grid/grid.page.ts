import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogeosService } from 'src/app/services/logeos.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  logeado:{[key:string]: String;}

  
  constructor(private servicio: LogeosService,
    private router:Router
    ) {
      const navigation = this.router.getCurrentNavigation();
      this.state = navigation?.extras.state as {
        idAlumno: string;
        nombre: string;
        apellido: string;
        tipo: string;
        rol: string;
        foto: string;
        telefono: number;
        carreera: string;
        perfil:string;

      };
     }

    state: any;
    nombre: String;
    apellido: String;
    tipo: String;
    rol: String;
    foto: String;
    telefono: Number;
    carreera: String;
    perfil:String;

  ngOnInit() 
  {
    console.log("redireccionando a grid")
    console.log("this nopmbre",this.nombre)
    this.servicio.$getObjectSource.subscribe(data => this.logeado=data)
    console.log(this.logeado)
    
    this.nombre = this.state.nombre;
    this.apellido = this.state.apellido;
    this.tipo = this.state.tipo;
    this.rol = this.state.rol;
    this.foto = this.state.foto;
    this.telefono = this.state.telefono;
    this.carreera = this.state.carreera;
    this.perfil = this.state.perfil;
  }



  



}
