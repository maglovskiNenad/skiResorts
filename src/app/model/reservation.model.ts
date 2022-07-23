

export class Reservation {
    _id: number;
    firstName: string;
    lastName: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.dateFrom = obj && new Date(obj.dateFrom) || new Date();
        this.dateTo = obj && new Date(obj.dateTo) || new Date();
        this.price = obj && obj.price || 0;
    }

    calculateDays(): number {
        const days = (this.dateTo.getTime() - this.dateFrom.getTime())/(1000*60*60*24)
        return days
    }
}