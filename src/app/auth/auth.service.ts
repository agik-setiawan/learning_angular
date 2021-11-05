import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
   
  }

  async login(user: any){
    return await this.http.post('http://localhost:3000/admin/auth/login',user).pipe(map(user => {
      return user;
    }));
  }

}
