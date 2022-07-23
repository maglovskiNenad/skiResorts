

export class Track {
    _id: number;
    mountain_id: number;
    name: string;
    length_km: number;
    rating: number;
    color: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.mountain_id = obj && obj.mountain_id || 0;
        this.name = obj && obj.name || "";
        this.length_km = obj && obj.length_km || 0;
        this.rating = obj && obj.rating || 0;
        this.color = obj && obj.color || "";
    }
}