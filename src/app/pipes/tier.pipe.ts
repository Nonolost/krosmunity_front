import { Pipe, PipeTransform } from '@angular/core';
import { TierListDTO} from '../models/TierListDTO.model';

@Pipe({
  name: 'tier'
})
export class TierPipe implements PipeTransform {

  transform(items: TierListDTO[], tierValue: number): any {
    if (!items || !tierValue) {
      return items;
    }

    return items.filter(element => element.tier === tierValue);
  }

}
