import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`)
  }
  addUser(userDetails){
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/users`,userDetails)
  }
  updateUser(userId,userDetails){
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/users/${userId}`,userDetails)
  }
  getUserById(userId){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
  deleteUser(userId){
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
}
