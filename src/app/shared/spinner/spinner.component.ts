import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {

  constructor(
    private router: Router,
    private loaderService: LoaderService,




  ) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

}
