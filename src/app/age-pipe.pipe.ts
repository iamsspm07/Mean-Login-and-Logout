import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {
  currentYear : any;
  currentAge : any;
  dateOfBirth : any;

  transform(value: any): any {
    this.dateOfBirth = new Date(value).getFullYear();
    this.currentYear = new Date().getFullYear();
    this.currentAge = this.currentYear - this.dateOfBirth ;
    return this.currentAge;
  }

}
