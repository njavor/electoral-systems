function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Voter{
    constructor(name, charisma, apathy, compass){
        this.name = name;
        this.charisma = charisma;
        this.apathy = apathy; // 0 (nope) - 99 (biztos megy szavazni)

        //beliefs
        this.compass = compass; // [0-99,0-99] (0,0)=LeftLiber, (99,99)=AuthRight
    }

    
    deleteMe(){
        delete this;
    }
    



    party_preference(parties){
        partylist = {};
        for (party in parties){
            partylist[party] = (Math.sqrt((party.compass[0]-this.compass[0])^2 + (party.compass[1]-this.compass[1])^2));
        }
        return partylist.sort(); // ??maybe reverse??
    }

    
    // static handshake(e,f){
        
    // }
}