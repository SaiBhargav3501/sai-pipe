import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonformat'
})
export class JsonformatPipe implements PipeTransform {

  transform(value: unknown){
    return JSON.stringify(value,null);
  }

}
