// START
const resultBox = document.getElementById('resbox');
const resultClose = document.getElementById('resclose');
let rescontent = document.getElementById("rescontent");

startbtn.addEventListener("click", showResultsBox);
resultClose.addEventListener('click', hideResultsBox);



let latest_election;
function showResultsBox(){
    resultBox.showModal();
    latest_election = new Election(voters, candidates);
}
function hideResultsBox(){
    resultBox.close();
    
    rescontent.innerHTML = "";

    FPTP.classList.remove("active");
    TRS.classList.remove("active");
    IRV.classList.remove("active");
}



FPTP.addEventListener("click", e => {
    if(FPTP.classList.contains("active")){
        FPTP.classList.remove("active");
    }
    else{
        TRS.classList.remove("active");
        IRV.classList.remove("active");
        FPTP.classList.add("active");

        console.log("DISPLAY: választás eredménye FPTP rendszerben");
        showRes(firstPastThePost(latest_election));
    }
});
TRS.addEventListener("click", e => {
    if(TRS.classList.contains("active")){
        TRS.classList.remove("active");
    }
    else{
        FPTP.classList.remove("active");
        IRV.classList.remove("active");
        TRS.classList.add("active");

        console.log("DISPLAY: választás eredménye TRS rendszerben");
        // showRes(firstPastThePost(latest_election));
    }
});
IRV.addEventListener("click", e => {
    if(IRV.classList.contains("active")){
        IRV.classList.remove("active");
    }
    else{
        FPTP.classList.remove("active");
        TRS.classList.remove("active");
        IRV.classList.add("active");

        console.log("DISPLAY: választás eredménye IRV rendszerben");
        // showRes(firstPastThePost(latest_election));
    }
});



function showRes(system){
    rescontent.innerHTML = "";
    
    rescontent.appendChild(system);
}