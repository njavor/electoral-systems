function votes(voter){
    return Math.random() > (voter.apathy/100);
}

/**
 * a singular election (creating preferencelists for those who vote)
 * @param {Array} voterlist list of all the people who can vote
 * @param {Array} optionlist list of parties/candidates to choose from
 * @returns a list containing the preferences of 'voterlist'
 */
class Election{
    constructor(voterlist, optionlist){
        this.voterlist = voterlist;
        this.optionlist = optionlist;

        this.voterpreferences = this.oneElection(this.voterlist, this.optionlist);
        this.numberofvotes = this.numberOfVotes();
    }

    oneElection(voterlist, optionlist){
        let voter_preferences = [];

        for(let i = 0; i < voterlist.length; i++){
            voter_preferences.push([]);
            if(votes(voterlist[i])){
                optionlist.forEach(option => {
                    voter_preferences[i].push(voterlist[i].distanceToOption(option));
                });
            }
        }
        
        return voter_preferences;
    }

    numberOfVotes(){
        let res = this.voterlist.length;
        for(let i = 0; i < this.voterlist.length; i++){
            if(this.voterpreferences[i].length == 0){
                res--;
            }
        }
        return res;
    }
}
