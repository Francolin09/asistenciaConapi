import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';
import { IndicadorComponent } from './indicador/indicador.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent,
    IndicadorComponent
  ],
  exports: [HeaderComponent,PopoverInfoComponent,IndicadorComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
