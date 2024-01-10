// DISPLAY

partyadd.addEventListener("click", addParty);
candidateadd.addEventListener("click", addCandidate);
populationadd.addEventListener("click", addVoters);

start.addEventListener("click", startSim);



// Party
function addPartyDisplay(party){
    var element = document.createElement("div");
    element.setAttribute('id', `party-${party.pk}`);
    element.classList.add("item");

    var text = document.createElement("p");
    text.appendChild(document.createTextNode(`${party.name} (${party.compass[0]},${party.compass[1]})`));

    var delbutton = document.createElement("button");
    delbutton.setAttribute('id', `party-${party.pk}-delete`);
    delbutton.classList.add("material-symbols-outlined");
    delbutton.style.fontWeight = 800;
    delbutton.innerHTML = "cancel";
    
    element.appendChild(text);
    element.appendChild(delbutton)

    document.getElementById("partylist").appendChild(element);
}

function partyDeleteListener(party){
    var element = document.getElementById(`party-${party.pk}`);
    
    var element_delete = document.getElementById(`party-${party.pk}-delete`);
    element_delete.addEventListener("click", function() {
        element.remove();

        parties = parties.filter((e) => e.pk != party.pk);
        console.log(parties);
    })
}

// Candidate
function addCandidateDisplay(candidate){
    var element = document.createElement("div");
    element.setAttribute('id', `candidate-${candidate.pk}`);
    element.classList.add("item");

    var text = document.createElement("p");
    text.appendChild(document.createTextNode(`${candidate.name} (${candidate.compass[0]},${candidate.compass[1]})`));

    var delbutton = document.createElement("button");
    delbutton.setAttribute('id', `candidate-${candidate.pk}-delete`);
    delbutton.classList.add("material-symbols-outlined");
    delbutton.style.fontWeight = 800;
    delbutton.innerHTML = "cancel";

    element.appendChild(text);
    element.appendChild(delbutton)

    document.getElementById("candidatelist").appendChild(element);
}

function candidateDeleteListener(candidate){
    var element = document.getElementById(`candidate-${candidate.pk}`);
    
    var element_delete = document.getElementById(`candidate-${candidate.pk}-delete`);
    element_delete.addEventListener("click", function() {
        element.remove();

        candidates = candidates.filter((e) => e.pk != candidate.pk);
        console.log(candidates);
    })
}


// Voters
function addVotersDisplay(pop, i){
    var element = document.createElement("div");
    element.setAttribute('id', `pop-${pop.pk}`);
    element.classList.add("item");

    var text = document.createElement("p");
    text.appendChild(document.createTextNode(`${pop.name}, apátia:${pop.apathy}, compass:(${pop.compass[0]},${pop.compass[1]}), fő:${i}`));

    var delbutton = document.createElement("button");
    delbutton.setAttribute('id', `pop-${pop.pk}-delete`);
    delbutton.classList.add("material-symbols-outlined");
    delbutton.style.fontWeight = 800;
    delbutton.innerHTML = "cancel";

    element.appendChild(text);
    element.appendChild(delbutton)

    document.getElementById("populationlist").appendChild(element);
}

function votersDeleteListener(pop){
    var element = document.getElementById(`pop-${pop.pk}`);
    
    var element_delete = document.getElementById(`pop-${pop.pk}-delete`);
    element_delete.addEventListener("click", function() {
        element.remove();

        voters = voters.filter((e) => e.pk != pop.pk);
        console.log(voters);
    })
}
function votersDeleteListener(pop, i){
    var element = document.getElementById(`pop-${pop.pk}`);
    
    var element_delete = document.getElementById(`pop-${pop.pk}-delete`);
    element_delete.addEventListener("click", function() {
        element.remove();

        voters = voters.filter((e) => e.pk != pop.pk)
        console.log(voters);
    })
}







// BACKGROUND
let voters = [];
let voter_num = 0;

let parties = [];
let party_num = 0;

let candidates = [];
let candidate_num = 0;

// party systems
let partysystems = [];

// candidate systems
let first_past_the_post = new FPTP([],[]);
let two_round = new TRS([],[]);
let instant_runoff = new IRV([],[]);
let candidatesystems = [first_past_the_post,two_round,instant_runoff];



function addParty(){
    let party = new Party(partyname.value, [party_x.value, party_y.value], party_num);
    parties.push(party);
    party_num += 1;
    
    addPartyDisplay(party);
    partyDeleteListener(party);


    console.log(parties);
}

function addCandidate(){
    let candidate = new Party(candidatename.value, [candidate_x.value, candidate_y.value], candidate_num);
    voters.push(candidate);
    candidate_num += 1;
    
    addCandidateDisplay(candidate);
    candidateDeleteListener(candidate);
    
    
    console.log(voters);
}

function addVoters(){
    let person = "";
    for (let i = 0; i < voternumber.value; i++) {
        person = new Voter(votername.value, voterapathy.value, [voter_x.value, voter_y.value], voter_num);
        voters.push(person);
    }
    voter_num += 1;

    addVotersDisplay(person, voternumber.value);
    votersDeleteListener(person, voternumber.value);

    console.log(voters);
}