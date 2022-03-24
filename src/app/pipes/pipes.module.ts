import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroDonePipe } from './filtro-done.pipe';



@NgModule({
  declarations: [FiltroDonePipe],
  exports:[FiltroDonePipe]
})
export class PipesModule { }
