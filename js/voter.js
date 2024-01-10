function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Voter{
    constructor(name, apathy, compass, pk){
        this.name = name;
        this.apathy = apathy; // 0 (nope) - 99 (biztos megy szavazni)
        
        //beliefs
        this.compass = compass; // [0-99,0-99] (0,0)=LeftLiber, (99,99)=AuthRightű

        this.pk = pk;
    }

    
    deleteMe(){
        delete this;
    }
    



    preference(list){
        let preferencelist = [];
        for(i in list){
            preferencelist.push(0);
        }

        for (i in list){
            console.log(list);
            preferencelist[i] = Math.abs(list[i].compass[0] - this.compass[0]) + Math.abs(list[i].compass[1] - this.compass[1]);
            // preferencelist[i] = Math.sqrt((list[i].compass[0]-this.compass[0])^2 + (list[i].compass[1]-this.compass[1])^2)
        }
        return preferencelist.indexOf(Math.min(... preferencelist));
    }
}



class Candidate{
    constructor(name, compass, pk){
        this.name = name
        this.compass = compass // [x,y] 0-99
        this.pk = pk
    }

    deleteMe(){
        delete this;
    }
}