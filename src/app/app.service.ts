import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    // return this.httpClient.get(environment.appUrl+'/users',{
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //   })})
    return this.httpClient.get(environment.appUrl+'/users')
  }
  addUser(userDetails){
    return this.httpClient.post(environment.appUrl+'/users',userDetails)
  }
  getUserById(userId){
    return this.httpClient.get(environment.appUrl+`/users/${userId}`)
  }
  editUser(userId,userDetails){
    return this.httpClient.put(environment.appUrl+`/users/${userId}`,userDetails)
  }
  deleteUser(userId){
    return this.httpClient.delete(environment.appUrl+`/users/${userId}`)
  }
}
