// INTRO
// const introBox = document.getElementById('introBox');
// const introCloseBtn = document.getElementById('introClose');

// introBox.showModal();

// introCloseBtn.addEventListener('click', (e) => {
//     introBox.close();
// })




// START
const resultBox = document.getElementById('resbox');
const resultClose = document.getElementById('resclose');

startbtn.addEventListener("click", startSim);
resultClose.addEventListener('click', (e) => {
    resultBox.close();

    for(i in candidatesystems){
        candidatesystems[i].voters = [];
        candidatesystems[i].candidates = [];
        candidatesystems[i].voteslist = [];
    }

    let buttons = document.querySelectorAll(".system-button");
    buttons.forEach(e => e.remove());

    document.getElementById("rescontent").innerHTML = "";
})


function startSim(){
    resultBox.showModal();

    for(i in candidatesystems){
        candidatesystems[i].voters = voters;
        candidatesystems[i].candidates = candidates;


        var element = document.createElement("button");
        element.appendChild(document.createTextNode(candidatesystems[i].constructor.name));
        element.setAttribute('id', candidatesystems[i].constructor.name)
        element.classList.add("system-button");
        element.addEventListener("click", e => {
            showRes(candidatesystems[i]);
        })


        document.getElementById("reschange").appendChild(element);
    }

    showRes(candidatesystems[0]);
}


function showRes(system){
    console.log("showRes run");
    resetContent();

    document.getElementById("rescontent");
    rescontent.appendChild(system.results());

    let buttons = document.querySelectorAll(".system-button");
    
    for(i in buttons){
        if(buttons[i].id === system.constructor.name){
            buttons[i].classList.add("active");
        }
        else{
            buttons[i].classList.remove("active");
        }
    }
}


function resetContent(){

}


let thebuttons = document.querySelectorAll(".system-button");
console.log(thebuttons);
thebuttons.forEach((e) => e.addEventListener("click",e => {
    console.log("szia");
    (e.id === "FPTP") ? showRes(candidatesystems[0]) : showRes(candidatesystems[1]);
}));

FPTP.addEventListener("click",e => {
    console.log("szia");
    showRes(candidatesystems[0]);
})

TRS.addEventListener("click",e => {
    console.log("szias");
    showRes(candidatesystems[1]);
})