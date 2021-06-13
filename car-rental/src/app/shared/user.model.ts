import { Rental } from "./rental.model";

export class User {
    public password :string;
    constructor(
        public user_name :string,
        public first_name :string,
        public last_name : string,
        public phone :string,
        public address : string,
        public email : string,
        public admin : boolean,
        public rentals : Rental[] = [],
        
        public token : string

    ){}
}
