// ONE WINNER

/**
 * First past the post voting
 * @param {Election} election 
 */
function firstPastThePost(election){
    let voters = election.voterlist;
    let candidates = election.optionlist;


    let votespercandidate = [];
    candidates.forEach(e => {
        votespercandidate.push(0);
    });
    election.voterpreferences.forEach(preflist => {
       votespercandidate[preflist.indexOf(Math.max(...preflist))] += 1;
    });


    let candidates_ordered = [];

    let votespercandidate_copy = [...votespercandidate];
    let biggest;
    while(votespercandidate_copy.length != 0){
        biggest = Math.max(...votespercandidate_copy);
        candidates_ordered.push(candidates[votespercandidate.indexOf(biggest)]);

        votespercandidate_copy.splice(votespercandidate_copy.indexOf(biggest), 1);
    }




    // creating HTML
    let contentElement = document.createElement("div");

    let winner = document.createElement("h3");
    winner.innerHTML = `győztes: ${candidates_ordered[0].name} <br>
                        ${Math.max(...votespercandidate)} szavazattal <br>
                        ${election.numberofvotes} személy ment el szavazni a ${voters.length}-ból/ből`;


    contentElement.appendChild(winner);
    return contentElement;
}

// class FPTP{
//     constructor(election){
//         this.election = election;

//         this.voterlist = this.election.voterlist;
//         this.candidateslist = this.election.optionlist;
//     }

//     results(election, voterlist, candidateslist){
//         reslist = [];
//         // getting results
//         candidateslist.forEach(e => {
//             reslist.push(0);
//         });

//         election.voterpreferences.forEach(preflist => {
//             let choice = preflist.indexOf(Math.max(...preflist)); //first match
//             reslist[c] += 1;
//         });

//         let resorder = [];
//         let reslist_copy = [...resorder]
//         while (reslist.length != resorder.length) {
//             let biggest = Math.max(...reslist_copy);
//             resorder.push(candidateslist[reslist.indexOf(biggest)]);
//             delete reslist_copy[reslist_copy.indexOf(biggest)];
//         }



//         // visualization
//         // let winnerInd = resdatabase.indexOf(Math.max(... resdatabase));

//         let winnerelement = document.createElement("h3");
//         winnerelement.innerHTML = `\nEgyszerű többségi szavazás esetén
//                                     <br><br><span style="color:var(--link);">${resorder[0].name}</span>
//                                     <br><br>nyeri a választást<br><br>${Math.max(...reslist)} szavazattal`;
//         let nov = document.createElement("p");
//         nov.innerHTML = `${election.numberofvotes} ment el szavazni a ${voterlist.length} szavazóból`


//         let resvis = document.createElement("div");
//         resvis.appendChild(winnerelement);
//         resvis.appendChild(nov);

        
//         return resvis;
//     }
// }

// Two-round System
// class TRS{
//     constructor(voters, candidates){
//         this.voters = voters;
//         this.candidates = candidates;

//         this.voteslist = [];
//     }


//     // election
//     personal_vote(voter, list){
//         this.voteslist.push(voter.preference(list));
//     }
//     voting(list){
//         for(i in voters){
//             this.personal_vote(voters[i], list);
//         }
//     }



//     results(){
//         // 1st round
//         this.voting(this.candidates);

//         let resdatabase = [];
//         for(i in this.candidates){
//             resdatabase.push(0);
//         }

//         for(i in this.voteslist){
//             resdatabase[this.voteslist[i]] += 1;
//         }
//         let number_of_votes = resdatabase.reduce((a, b) => a + b, 0);
//         let winnerInd = resdatabase.indexOf(Math.max(... resdatabase));
        
//         let second_round = false;
//         // 2nd round
//         let round2_candidates = [];
//         if(resdatabase[winnerInd] < (number_of_votes/2)){
//         // if(true){
//             resdatabase = resdatabase.filter(e => e < resdatabase[winnerInd]);
//             let secondInd = resdatabase.indexOf(Math.max(... resdatabase));
            
//             let list = this.candidates[winnerInd];
//             round2_candidates.push(this.candidates[winnerInd]);
//             round2_candidates.push(this.candidates[secondInd]);
            
//             this.voteslist = [];
//             console.log("----- round 2 ------");
//             console.log(round2_candidates);
//             this.voting(round2_candidates);
            
//             resdatabase = [];
//             for(i in round2_candidates){
//                 resdatabase.push(0);
//             }

//             for(i in this.voteslist){
//                 resdatabase[this.voteslist[i]] += 1;
//             }
//             number_of_votes = resdatabase.reduce((a, b) => a + b, 0);
//             winnerInd = resdatabase.indexOf(Math.max(... resdatabase));

//             second_round = true;
//         }

        
        
//         // visualization

//         console.log(round2_candidates);
//         let firstroundtext = document.createElement("p");
//         if(second_round){
//             firstroundtext.innerHTML = `Első fordulóból tovább jutott: ${round2_candidates[0].name} (${round2_candidates[0].compass[0]},${round2_candidates[0].compass[1]}) és 
//                                         ${round2_candidates[1].name} (${round2_candidates[1].compass[0]},${round2_candidates[1].compass[1]}))`
//         }
//         let winnerelement = document.createElement("h3");
//         winnerelement.innerHTML = `\nKétfordulós szavazás esetén
//                                     <br><br><span style="color:var(--link);">${(second_round) ? round2_candidates[winnerInd].name : candidates[winnerInd].name}</span>
//                                     <br><br>nyeri a választást<br><br>${resdatabase[winnerInd]} szavazattal`;
//         let nov = document.createElement("p");
//         nov.innerHTML = `${number_of_votes} ment el szavazni a ${voters.length} szavazóból`


//         let resvis = document.createElement("div");
//         if(second_round){resvis.appendChild(firstroundtext);}
//         resvis.appendChild(winnerelement);
//         resvis.appendChild(nov);

        
//         return resvis;
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


// // FOR PARTY