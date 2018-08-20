import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonService {

    private baseUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) { }

    getTest() {
        //return this.http.get(this.baseUrl + 'test').map(res => res.json());
    }
}
