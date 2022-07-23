import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { Resort } from '../model/resort.modle';
import { SkiPass } from '../model/skipass.model';
import { Track } from '../model/track.model';
import { ResortService } from '../serivces/resort.service';

@Component({
  selector: 'app-resort-page',
  templateUrl: './resort-page.component.html',
  styleUrls: ['./resort-page.component.css']
})
export class ResortPageComponent implements OnInit {

  resortId: number = 0;
  resort: Resort = new Resort();

  tracks: Track[] = [];
  tracksParams = {
    sort: ""
  }

  skipass: SkiPass[] = []

  activeTab = 3;

  constructor(
    private route: ActivatedRoute,
    private service: ResortService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.resortId = params['id']
      this.getResort();
      this.getTracks();
      this.getSkiPass();
    })
  }

  getResort(): void {
    this.service.getResort(this.resortId).subscribe((resort: Resort) => {
      // console.log(resort);
      this.resort = resort;
    })
  }

  getTracks(): void {
    this.service.getTracks(this.resortId, this.tracksParams).subscribe((tracks: Track[]) => {
      // console.log(tracks);
      this.tracks = tracks;
    })
  }

  onTrackSort(sortBy: string) {
    this.tracksParams.sort = sortBy;
    this.getTracks();
  }

  getSkiPass(): void {
    this.service.getSkiPass(this.resortId).subscribe((skipass: SkiPass[]) => {
      this.skipass = skipass;
    })
  }

  postReservation(reservation: Reservation): void {
    this.service.postRequest(this.resortId, reservation).subscribe({
      next: (data: Reservation) => {
        console.log(data);
        alert("success");
      },
      error: (err: any) => alert(JSON.stringify(err))
    })
  }

}
