import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Books } from './Model/books.model';
import { users } from './Model/books.model';
@Injectable({
  providedIn: 'root'
})

export class BooksService {
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accect','accept/json');

 httpOption = {

   headers: this.headers

 }
  baseUrl='http://localhost:3000/books';
  userurl='http://localhost:3000/users'
  constructor(private http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }

    return throwError('their is error in code');
  }

  public getbook():Observable<Books[]>{
  return this.http.get<Books[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
  public addbook(emp:any):Observable<Books>{
    return this.http.post<Books>(this.baseUrl,emp);
  }
  public deletebook(id:number):Observable<Books>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Books>(url).pipe(catchError(this.handleError));
  }
  public getUpdateUser(id: number): Observable<Books> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Books>(url,this.httpOption)

  }

  public getcount():Observable<users[]>{
    return this.http.get<users[]>(this.userurl).pipe(catchError(this.handleError));
    }

public updatebookcount(id:number,changes: Partial<users>):Observable<users>
{
  debugger;
  const url=`${this.userurl}/${id}`;
return this.http.put<users>(url,changes);

}
  public updateUser(user: any): Observable<Books> {

    const url = `${this.baseUrl}/${user.id}`;

    return this.http.put<Books>(url,user).pipe(

      map(() => user)

    );

  }
}
