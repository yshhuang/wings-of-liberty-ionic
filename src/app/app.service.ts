import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'https://raw.githubusercontent.com/hyschn/wings-of-liberty-source/master';

  constructor(private http: HttpClient, ) { }

  getConfigJson(): Observable<any> {
    return this.http.get(this.baseUrl + '/config.json');
  }

  getFileContext(filePath: string): Promise<string> {
    return this.http.get(this.baseUrl + filePath, { responseType: 'text' }).toPromise();
  }
}
