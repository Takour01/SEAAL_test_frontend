import { Injectable, WritableSignal, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ConstantService } from '../constant/constant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Manager from '../../models/Manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient, private readonly constants: ConstantService, private readonly auth: AuthService) {
  }

  message: WritableSignal<string> = signal("");



  reset() {
    // Assuming you have the authentication token stored in a variable named 'authToken'
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.token
    });
    return this.http.post<{ msg: string }>(this.constants.apiUrl + "/managers/send", {
    }, { headers })
  }






}
