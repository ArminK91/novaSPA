import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:54058/api/';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json;version=1'
    //'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

export const httpReportOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/pdf'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  headersMultipartFormData: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headersMultipartFormData = new HttpHeaders();
    this.headersMultipartFormData.delete("Content-Type");
    this.headersMultipartFormData.set('Accept', 'application/json');
    this.headersMultipartFormData.set('enctype', 'multipart/form-data');
    
  }


  public extractData(res: Response) {
    const body: any = res.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

    get = (url: string): Observable<any> => this.http.get(this.getApiUrl(url), httpOptions);
    delete = (url: string): Observable<any> => this.http.delete(this.getApiUrl(url), httpOptions);
    put = (url: string, body: any): Observable<any> => this.http.put(this.getApiUrl(url), body, httpOptions);
    post = (url: string, body: any): Observable<any> => this.http.post(this.getApiUrl(url), body, httpOptions);
    patch = (url: string, body: any): Observable<any> => this.http.patch(this.getApiUrl(url), body, httpOptions);
  
    public getApiUrl(urlPart: string): string {
      return `${apiUrl}${urlPart}`;
  }  

  postFormData = (url: string, body: any): Observable<Object> =>
  this.http.post(this.getApiUrl(url), body, { headers: this.headersMultipartFormData })
 
}
