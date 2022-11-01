import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { throwError, Observable, BehaviorSubject, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class GiphyService {

    constructor(private httpClient: HttpClient) {}

        getTrendingGifs(){
            const url = 'https://api.giphy.com/v1/gifs/trending?api_key=ei34ea7Bgbzvgjn5rjBeWho6JfIv8dFy&limit=25&rating=pg-13'
            return this.httpClient.get(url)
            .pipe(
                catchError((err) => {
                    return throwError('An error occured when processing getCurrentCompany', err);
                })
            );;
         };
        getAllGifs(){
            const url = 'https://api.giphy.com/v1/gifs/trending?api_key=ei34ea7Bgbzvgjn5rjBeWho6JfIv8dFy&limit=25&rating=pg-13'
            return this.httpClient.get(url)
            .pipe(
                catchError((err) => {
                    return throwError('An error occured when processing getCurrentCompany', err);
                })
            );;
        };
        getSearchGifs(data: any) {
            const url = ('https://api.giphy.com/v1/gifs/search?api_key=ei34ea7Bgbzvgjn5rjBeWho6JfIv8dFy&q='+data+'&limit=25&offset=1&rating=pg-13&lang=en');
            return this.httpClient.get(url)
            .pipe(
                catchError((err) => {
                    return throwError('An error occured when processing getCurrentCompany', err);
                })
            );
        };
        getByID(id?: string){
            const url = ('https://api.giphy.com/v1/gifs/' + id +'?api_key=ei34ea7Bgbzvgjn5rjBeWho6JfIv8dFy');
            return this.httpClient.get(url)
            .pipe(
                catchError((err) => {
                    return throwError('An error occured when processing getCurrentCompany', err);
                })
            );
        }
}

