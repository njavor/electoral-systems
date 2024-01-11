function votes(voter){
    return Math.random() > (voter.apathy/100);
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
        if(votes(voter)){
        this.voteslist.push(voter.preference(this.candidates));
        }
    }
    voting(){
        for(i in voters){
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
        let number_of_votes = resdatabase.reduce((a, b) => a + b, 0)



        // visualization
        let winnerInd = resdatabase.indexOf(Math.max(... resdatabase));

        let winnerelement = document.createElement("h3");
        winnerelement.innerHTML = `\nEgyszerű többségi szavazás esetén
                                    <br><br><span style="color:var(--link);">${candidates[winnerInd].name}</span>
                                    <br><br>nyeri a választást<br><br>${resdatabase[winnerInd]} szavazattal`;
        let nov = document.createElement("p");
        nov.innerHTML = `${number_of_votes} ment el szavazni a ${voters.length} szavazóból`


        let resvis = document.createElement("div");
        resvis.appendChild(winnerelement);
        resvis.appendChild(nov);

        
        return resvis;
    }
}

// Two-round System
class TRS{
    constructor(voters, candidates){
        this.voters = voters;
        this.candidates = candidates;

        this.voteslist = [];
    }


    // election
    personal_vote(voter, list){
        this.voteslist.push(voter.preference(list));
    }
    voting(list){
        for(i in voters){
            this.personal_vote(voters[i], list);
        }
    }



    results(){
        // 1st round
        this.voting(this.candidates);

        let resdatabase = [];
        for(i in this.candidates){
            resdatabase.push(0);
        }

        for(i in this.voteslist){
            resdatabase[this.voteslist[i]] += 1;
        }
        let number_of_votes = resdatabase.reduce((a, b) => a + b, 0);
        let winnerInd = resdatabase.indexOf(Math.max(... resdatabase));
        
        let second_round = false;
        // 2nd round
        let round2_candidates = [];
        if(resdatabase[winnerInd] < (number_of_votes/2)){
        // if(true){
            resdatabase = resdatabase.filter(e => e < resdatabase[winnerInd]);
            let secondInd = resdatabase.indexOf(Math.max(... resdatabase));
            
            let list = this.candidates[winnerInd];
            round2_candidates.push(this.candidates[winnerInd]);
            round2_candidates.push(this.candidates[secondInd]);
            
            this.voteslist = [];
            console.log("----- round 2 ------");
            console.log(round2_candidates);
            this.voting(round2_candidates);
            
            resdatabase = [];
            for(i in round2_candidates){
                resdatabase.push(0);
            }

            for(i in this.voteslist){
                resdatabase[this.voteslist[i]] += 1;
            }
            number_of_votes = resdatabase.reduce((a, b) => a + b, 0);
            winnerInd = resdatabase.indexOf(Math.max(... resdatabase));

            second_round = true;
        }

        
        
        // visualization

        console.log(round2_candidates);
        let firstroundtext = document.createElement("p");
        if(second_round){
            firstroundtext.innerHTML = `Első fordulóból tovább jutott: ${round2_candidates[0].name} (${round2_candidates[0].compass[0]},${round2_candidates[0].compass[1]}) és 
                                        ${round2_candidates[1].name} (${round2_candidates[1].compass[0]},${round2_candidates[1].compass[1]}))`
        }
        let winnerelement = document.createElement("h3");
        winnerelement.innerHTML = `\nKétfordulós szavazás esetén
                                    <br><br><span style="color:var(--link);">${(second_round) ? round2_candidates[winnerInd].name : candidates[winnerInd].name}</span>
                                    <br><br>nyeri a választást<br><br>${resdatabase[winnerInd]} szavazattal`;
        let nov = document.createElement("p");
        nov.innerHTML = `${number_of_votes} ment el szavazni a ${voters.length} szavazóból`


        let resvis = document.createElement("div");
        if(second_round){resvis.appendChild(firstroundtext);}
        resvis.appendChild(winnerelement);
        resvis.appendChild(nov);

        
        return resvis;
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