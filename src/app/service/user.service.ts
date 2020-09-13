import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;
  private defaultUser = new BehaviorSubject('nouserwasprovided');
  currentUser = this.defaultUser.asObservable();

  constructor(private http: HttpClient) {
  	this.url = 'https://todo-list-luis.herokuapp.com/users/'
  }

  getAllUsers():Observable<any> {
  	return this.http.get<any>(this.url);
  }

  addUser(postData):Observable<any> {
  	return this.http.get<any>(this.url, postData);
  }

  updateUser(user: string) {
  	this.defaultUser.next(user);
  }
}
