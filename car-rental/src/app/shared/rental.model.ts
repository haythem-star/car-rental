import { Car } from "./Car.model";

export class Rental {
    constructor(
        public car : Car,
        public start_rental : Date,
        public end_rental : Date,
        public place_of_contract : string,
        public prise : number
    ){}
}