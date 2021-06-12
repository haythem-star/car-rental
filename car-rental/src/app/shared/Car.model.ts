export class Car {
   public booking : Date[];
   public likes : {nb : number,clients : []}={nb : 0,clients : []};
    constructor(
        public model : string,
       public Registration : string,
        public imgPath : string,
       public description : string,
        public mark : string,
       public society : string,
        public gearbox : string,
        public speed : number,
        public seats : number,
        public location : string,
        public price : number
    ){}

}