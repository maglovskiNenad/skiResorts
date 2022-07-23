import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/model/track.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  // <select> console.log na promenu
  // output na promenu selecta
  // roditelj hvata output (console log)
  // query parametri
  // getTracks o5

  @Input()
  tracks: Track[] = [];

  @Output()
  sortChange: EventEmitter<string> = new EventEmitter();

  sortBy: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSortChanged(): void {
    this.sortChange.emit(this.sortBy)
  }

}
