import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }


  generateYears(): number[] {
    const years: number[] = [];
    for (let year = 2024; year <= 2050; year++) {
      years.push(year);
    }
    return years;
  }
}
