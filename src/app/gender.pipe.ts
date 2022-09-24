import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(EmployeeName: any, EmployeeGander: any): any {
    if(EmployeeGander == "Male")
    return "Mr. "+EmployeeName;
    else
    return "Miss. "+ EmployeeName;
  }

}
