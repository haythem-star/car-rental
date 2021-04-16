import { Rental } from "./rental.model";

export class User {
    constructor(
        public first_name :string,
        public last_name : string,
        public National : string,
        public region : string,
        public birth_date : Date,
        public phone_number : string,
        private cin : string,
        private rentals : Rental[] = []

    ){}
}