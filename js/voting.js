function votes(voter){
    return Math.random() < (voter.apathy/100);
}

// FOR CANDIDATE
// First past the post
class FPTP{
    constructor(voters, parties, pk){
        this.voters = voters;
        this.parties = parties;
        this.pk = pk

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

// // Two-round System
// class TRS{
//     constructor(voters, parties){
//         this.voters = voters;
//         this.parties = parties;

//         this.votes = [];
//     }
// }

// // Instant-runoff voting
// class IRV{
//     constructor(voters, parties){
//         this.voters = voters;
//         this.parties = parties;

//         this.votes = [];
//     }
// }


// FOR PARTY