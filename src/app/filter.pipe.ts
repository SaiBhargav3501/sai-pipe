import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';
@Pipe({
  name: 'filter1',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filtertext:string) {
   if (value.length===0 || filtertext===""){
    return value
   }else{
    const users=[]
    for  (const user of value){
      if (user ['gender']===filtertext){

        users.push(user)

      }

    }
    return users
   }

  }

}
