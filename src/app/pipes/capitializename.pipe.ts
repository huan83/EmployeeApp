import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitializename'
})
export class CapitializenamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let output = value[0].toUpperCase() + value.slice(1);
    return output;
  }

}
