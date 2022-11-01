import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { GiphyService } from 'src/app/core/services/giphy.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard-list-component',
  templateUrl: '../pages/dashboard-list.component.html',
  styleUrls: ['../pages/dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  searchInput = new FormControl('');
  subs: any[] = [];
  giphys: any[] = [];
  panigation:any;
  playerName: any = 'dd'
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giphyService: GiphyService
  ) { }
  ngOnInit(): void {
    this.giphyService.getTrendingGifs().subscribe(
      (response: any) => { this.giphys = response.data;
        this.panigation = response.panigation
       }
    )
  }
   search() {
    if (this.searchInput.value != "") {
      this.giphyService.getSearchGifs(this.searchInput.value).subscribe(
        (response: any) => { this.giphys = response.data }
      )
    }
  }
  viewDetail(item:any){
    this.router.navigateByUrl(`dashboard/view/${item.id}`);
  }
}
