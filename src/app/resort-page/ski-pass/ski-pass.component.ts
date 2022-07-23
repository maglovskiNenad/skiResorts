import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Reservation } from "src/app/model/reservation.model";
import { SkiPass } from "src/app/model/skipass.model";

@Component({
  selector: "app-ski-pass",
  templateUrl: "./ski-pass.component.html",
  styleUrls: ["./ski-pass.component.css"],
})
export class SkiPassComponent implements OnInit {
  @Input()
  skipass: SkiPass[] = [];

  @Output()
  newReservation: EventEmitter<Reservation> = new EventEmitter();

  reservation: Reservation = new Reservation();

  dateFrom: NgbDateStruct = { day: 0, month: 0, year: 0 };
  dateTo: NgbDateStruct = { day: 0, month: 0, year: 0 };

  constructor() {}

  ngOnInit(): void {}

  onDateChanged(): void {
    console.log("date changed");
    // if (!this.dateFrom) { //nevalidno
    //   this.reservation.price = 0;
    // }
    this.reservation.dateFrom = new Date(
      this.dateFrom.year,
      this.dateFrom.month,
      this.dateFrom.day
    );
    this.reservation.dateTo = new Date(
      this.dateTo.year,
      this.dateTo.month,
      this.dateTo.day
    );

    const days = this.reservation.calculateDays();
    console.log("days", days);

    for (let pass of this.skipass) {
      if (pass.duration == days) {
        this.reservation.price = pass.price;
        return;
      }
    }

    this.reservation.price = 0;
  }

  postReservation() {
    console.log(this.reservation);
    // validaction
    this.newReservation.emit(this.reservation);
  }
}
