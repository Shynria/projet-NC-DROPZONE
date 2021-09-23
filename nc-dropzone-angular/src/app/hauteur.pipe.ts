import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hauteur'
})
export class HauteurPipe implements PipeTransform {

  transform(value: string): string {
    if (value == "MILLE_DEUX_CENTS")
      return "1200m"
    else if (value == "MILLE_SIX_CENTS")
      return "1600m"
    else if (value == "DEUX_MILLES")
      return "2000m"
    else if (value == "DEUX_MILLES_CINQ_CENTS")
      return "2500m"
    else if (value == "QUATRE_MILLES")
      return "4000m"
    else if (value == "SIX_MILLES")
      return "6000m"
    return "hauteur inconnu"
  }

}
