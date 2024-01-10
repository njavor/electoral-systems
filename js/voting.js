function votes(voter){
    return Math.random() < (voter.apathy/100);
}





// FOR CANDIDATE
// First past the post
class FPTP{
    constructor(voters, candidates){
        this.voters = voters;
        this.candidates = candidates;

        this.voteslist = [];
    }

    // election
    personal_vote(voter){
        // if(votes(voter)){
        this.voteslist.push(voter.preference(this.candidates));
    }
    voting(){
        for(i in voters){
            console.log(i);
            this.personal_vote(voters[i]);
        }
    }



    results(){
        this.voting();

        let resdatabase = [];
        for(i in this.candidates){
            resdatabase.push(0);
        }

        for(i in this.voteslist){
            resdatabase[this.voteslist[i]] += 1;
        }

        // visualization
        let winnerInd = resdatabase.indexOf(Math.max(... resdatabase));

        console.log(resdatabase);
        let winnerelement = document.createElement("h3");
        winnerelement.innerHTML = `\nEgyszerű többségi szavazás útján<br><br><span style="color:var(--link);">${candidates[winnerInd].name}</span><br><br>nyeri a választást<br><br>${resdatabase[winnerInd]} szavazattal`;


        let resvis = document.createElement("div");
        resvis.appendChild(winnerelement);

        
        return resvis;
    }
}

// Two-round System
class TRS{
    constructor(voters, parties){
        this.voters = voters;
        this.parties = parties;

        this.votes = [];
    }
}

// Instant-runoff voting
class IRV{
    constructor(voters, parties){
        this.voters = voters;
        this.parties = parties;

        this.votes = [];
    }
}


// FOR PARTY