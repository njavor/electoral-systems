function votes(voter){
    return Math.random() < (voter.apathy/100);
}


// First past the post
class FPTP{
    constructor(date, parties, voters){
        this.date = date;
        this.parties = parties;
        this.voters = voters;

        this.votes = [];
    }

    personal_vote(voter){
        if(votes(voter)){
            this.votes.push(voter.party_preference[0]);
        }
    }

    static results(){
        var votelist = {}
        for (party in parties){
            votelist[party] = 0;
        }

        for (vote in votes){
            votelist[vote] += 1;
        }
        return votelist.sort();
    }
}

// Two-round System
class TRS{
    constructor(date, parties, voters){
        this.date = date;
        this.parties = parties;
        this.voters = voters;

        this.votes = [];
    }
}

// Instant-runoff voting
class IRV{
    constructor(date, parties, voters){
        this.date = date;
        this.parties = parties;
        this.voters = voters;

        this.votes = [];
    }
}

// Single non-transferable vote
class STV{
    constructor(date, parties, voters){
        this.date = date;
        this.parties = parties;
        this.voters = voters;

        this.votes = [];
    }
}
