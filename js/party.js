class Party{
    constructor(name, compass, pk){
        this.name = name
        this.compass = compass // [x,y] 0-99
        this.pk = pk
        // this.rhetoric = rhetoric // populist, elitist, 
    }

    deleteMe(){
        delete this;
    }


}