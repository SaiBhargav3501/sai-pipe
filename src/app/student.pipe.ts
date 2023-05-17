import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'saiPipe',
    pure:false

})

export class percentagePipe implements PipeTransform{
    transform(value: number,totalmark:number,decimal:number) {
        return (value/totalmark).toFixed(decimal)
        
    }
}