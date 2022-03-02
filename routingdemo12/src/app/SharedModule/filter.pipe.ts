import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, Filtering:string,ids:string) {
  //   if(value.length===0 || Filtering ===''){
  //     return value;
  //   }
  //   const details=[];
  //   console.log(value);
  //   for(const employees of value){
  //     if(employees['name']===Filtering){
  //       console.log(value);
  //       details.push(employees);
  //     }else if(employees['id']===ids){
  //       details.push(employees);
  //       // return value.filter
  //     }
  //   }
  //   return details;
  // 
}

}
