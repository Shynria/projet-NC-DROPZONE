import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponible'
})
export class DisponiblePipe implements PipeTransform {

  transform(value: boolean): string {
    if(value)
      return "Disponible"
    else
      return "Indisponible"
  }

}
