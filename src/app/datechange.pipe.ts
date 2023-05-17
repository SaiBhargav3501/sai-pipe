import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'age'
})
export class DatechangePipe implements PipeTransform {

  transform(value:any):any {
  let currentyear:any=new Date().getFullYear()
  console.log(currentyear)
  let userbday:any=new Date(value).getFullYear()
  let userage=currentyear-userbday
  return userage;
   
  }

}
