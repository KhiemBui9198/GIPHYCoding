import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { interval } from "rxjs";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class LoaderService {

 
}

export enum LoaderType {
    None = 'primary',
    Loading = 'loading',
    Submmit = 'submmit',
    Export = 'export',
    Moving = 'moving',
    Create = 'create',
    SubmitRequest = 'submitRequest',
    Deleting = 'delete',
    Navigate = 'navigate'
}