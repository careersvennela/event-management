import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  serverUrl="/";

  constructor(private http: HttpClient) {
    this.getEventsList().subscribe(data => {
      console.log(data);
    });
  }

  public getEventsList(): Observable<any> {
    return this.http.get("./assets/eventList.json");
  }

  public postApi(url,data): Observable<any> {
    return this.http.post(this.serverUrl+url,data);
  }

  public getApi(url): Observable<any> {
    return this.http.get(this.serverUrl+url);
  }
}
