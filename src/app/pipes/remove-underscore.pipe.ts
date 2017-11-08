import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore'
})
export class RemoveUnderscorePipe implements PipeTransform {

  transform(value: string): any {
    let noUnderscores  = value.replace(/_/g, ' ');
    return noUnderscores;
  }

}
