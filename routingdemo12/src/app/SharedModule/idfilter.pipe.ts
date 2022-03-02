import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee.model';
@Pipe({
  name: 'idfilter'
})
export class IdfilterPipe implements PipeTransform {
  transform(value: any, ids:number) {
  //   if(value.length===0 ){
  //     return value;
  //   }
  //   const details=[];
  //   for(const employees of value){
  //     if(employees['id']===ids){

  //       details.push(employees);
  //      }
  //     //  else if(employees['id']===ids){
  //     //   details.push(employees);
  //     // }
  //     }
  //   return details;
    
  // 
}

}
