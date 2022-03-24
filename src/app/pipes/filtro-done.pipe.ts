import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroDone',
  pure:false
})
export class FiltroDonePipe implements PipeTransform {

  transform(listas:Lista[],completada:boolean=true): Lista[] {

    return listas.filter(lista=>lista.completed === completada);;

  
  }

}
