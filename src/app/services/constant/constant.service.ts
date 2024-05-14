import { Injectable } from '@angular/core';


interface itemInterface {
  value: string;
  viewValue: string;
}


@Injectable({
  providedIn: 'any'
})
export class ConstantService {

  constructor() { }
  readonly apiUrl: string = "http://localhost:3000/api"
  readonly baseUrl: string = "http://localhost:3000"

  readonly months: itemInterface[] = [
    { value: '1', viewValue: 'Janvier' },
    { value: '2', viewValue: 'Février' },
    { value: '3', viewValue: 'Mars' },
    { value: '4', viewValue: 'Avril' },
    { value: '5', viewValue: 'Mai' },
    { value: '6', viewValue: 'Juin' },
    { value: '7', viewValue: 'Juillet' },
    { value: '8', viewValue: 'Août' },
    { value: '9', viewValue: 'Septembre' },
    { value: '10', viewValue: 'Octobre' },
    { value: '11', viewValue: 'Novembre' },
    { value: '12', viewValue: 'Décembre' }
  ];

}
