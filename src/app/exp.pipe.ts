import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  currenyYear : any;
  joinYear : any;
  experience : any;

  transform(value: any): any {
    this.currenyYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currenyYear - this.joinYear;
    return this.experience;
  }

}
