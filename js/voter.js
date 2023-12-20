function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Voter{
    constructor(name, charisma, manners, apathy){
        this.name = name;
        this.charisma = charisma;
        this.manners = manners;
        this.apathy = apathy;
    }

    // létezés
    deleteMe(){
        delete this;
    }


    vote(system){
        if(getRandomInt(this.apathy))
        system.personalVote(this);
    }


    static handshake(e,f){
        
    }
}