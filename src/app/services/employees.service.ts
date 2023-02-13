import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpClient: HttpClient) { 
    
  }

  private _baseAddress: string = "https://localhost:7274/api";

  getAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${this._baseAddress}/employees`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFiYWRlLnByYXZpbmt1bWFyQHdlYnBvY2h1Yi5jb20iLCJyb2xlIjoiRW1wbG95ZWUiLCJuYmYiOjE2NzYyOTQ4NTAsImV4cCI6MTY3NjI5ODQ1MCwiaWF0IjoxNjc2Mjk0ODUwfQ.SUwtLtdZuK5Wc82CE9aCA-uBJoD7t8lR5fz6YfXx5kZVgCl9zq-6kUJb9bBt9BzoEhfsgPK5VGl5ISdUsBNPfQ"
      }
    });
  }
}
