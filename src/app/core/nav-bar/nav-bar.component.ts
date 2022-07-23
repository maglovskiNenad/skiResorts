import { Component, OnInit } from '@angular/core';
import { ResortInfo } from 'src/app/model/resort-info.model';
import { ResortService } from 'src/app/serivces/resort.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  resorts: ResortInfo[] = []

  constructor(private service: ResortService) { }

  ngOnInit(): void {
    this.service.getResortsInfo().subscribe({
      next: (data: ResortInfo[]) => { this.resorts = data; },
      error: (err) => { console.log(err) }
    })
  }

}
