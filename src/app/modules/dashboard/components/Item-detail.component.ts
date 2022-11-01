import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router, ParamMap } from '@angular/router';
import { OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { GiphyService } from 'src/app/core/services/giphy.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-item-detail-component',
  templateUrl: '../pages/item-detail.component.html',
  styleUrls: ['../pages/item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  subs: any[] = [];
  giphIds!:string | null;
  giphy: any;
  panigation:any;
  embed:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giphyService: GiphyService
  ) {    }
  ngOnInit(): void {
 
  //  this.route.paramMap.subscribe((params: ParamMap) => {
  //    this.giphId = + params.get('giphId')
  //  })
    this.giphIds = this.route.snapshot.paramMap.get('giphId');
    this.initData();
 
}
initData() {
   this.giphyService.getByID(this.giphIds!).subscribe(
      (response: any) => { this.giphy = response.data; },
    );
  }
    copyMessage(dataCopy:any){
      dataCopy.select();
      document.execCommand('copy');
      dataCopy.setselectRange(0, 0);
  }
}
