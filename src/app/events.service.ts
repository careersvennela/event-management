import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  serverUrl="http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  public postApi(url,data): Observable<any> {
    return this.http.post(this.serverUrl+url,data);
  }

  public getApi(url): Observable<any> {
    return this.http.get(this.serverUrl+url);
  }
}
