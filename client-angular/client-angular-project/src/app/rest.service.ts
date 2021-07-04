import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://localhost:44309/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 

    
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getStudents(): Observable<any> {
    return this.http.get(endpoint + 'Student/GetStudents').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudents'))
      );
  }

  getStudent(id): Observable<any> {
    return this.http.get(endpoint + 'Student/GetStudentById/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudentById'))
      );
  }

  addStudent (student): Observable<any> {
    console.log(student);
    return this.http.post<any>(endpoint + 'Student/PostStudent/'+ JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('added student')),
      catchError(this.handleError<any>('addStudent'))
    );
  }

  deleteStudent (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'Student/DeleteStudent/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deletestudents'))
    );
  }

  updateStudent (student): Observable<any> {
    return this.http.put(endpoint + 'Student/PutStudent/'+JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('updated student')),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  getNationalities(): Observable<any> {
    return this.http.get(endpoint + 'Student/GetStudents').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudents'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
