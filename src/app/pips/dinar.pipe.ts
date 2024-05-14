import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinar',
  standalone: true
})
export class DinarPipe implements PipeTransform {

  transform(value: any): string {
    // Check if value is a valid number
    if (value == null || isNaN(value)) {
      return 'Invalid input';
    }

    // Format the number as Algerian Dinar
    const formattedValue = Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return `${formattedValue} DZD`;
  }

}
