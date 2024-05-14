import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantService } from '../constant/constant.service';
import { Router } from '@angular/router';
import { userRole } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, readonly constants: ConstantService, private router: Router) { }
  private getLocalStogeToken() {
    return localStorage.getItem("AdminToken") || ""
  }
  setLocalStogeToken(token: string) {
    localStorage.setItem("AdminToken", token)
  }
  private getLocalStogeRole() {
    return localStorage.getItem("AdminRole") || ""
  }
  setLocalStogeRole(role: string) {
    localStorage.setItem("AdminRole", role)
  }
  token: string = this.getLocalStogeToken()
  role: string = this.getLocalStogeRole()
  login(data: { username: string, password: string, role: userRole }) {
    return this.http.post<{ access_token: string }>(this.constants.apiUrl + `/auth/login`, data)
  }
  register(data: { username: string, password: string, role: userRole }) {
    return this.http.post<{ token: string, role: string }>(this.constants.apiUrl + "/auth/register", data)
  }
  getUser() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<{ username: string, role: userRole }>(this.constants.apiUrl + "/auth/profile", {
      headers
    })
  }

  logout() {
    this.token = ""
    this.role = ""
    localStorage.removeItem("AdminToken")
    localStorage.removeItem("AdminRole")
    this.router.navigate([`/login/Manager`])
  }
}




