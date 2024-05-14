import { Injectable, WritableSignal, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ConstantService } from '../constant/constant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Manager from '../../models/Manager';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient, private readonly constants: ConstantService, private readonly auth: AuthService) {
  }


  managers: WritableSignal<Manager[]> = signal([]);

  getAllManagers(name?: string) {
    // Assuming you have the authentication token stored in a variable named 'authToken'
    console.log('====================================');
    console.log(this.auth.role);
    console.log('====================================');


    const query = name ? "?" + `name=${name}` : ""

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.token
    });
    return this.http.get<Manager[]>(this.constants.apiUrl + "/administrators/managers" + query, { headers })
  }


  resetManager(id: number) {
    // Assuming you have the authentication token stored in a variable named 'authToken'
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.token
    });
    return this.http.post<boolean>(this.constants.apiUrl + `/administrators/managers/${id}/reset`, {
    }, { headers })
  }
}