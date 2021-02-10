// player id pop-ups
let getPlayerID = document.getElementsByClassName("getPlayerID");
let PlayerIDList = document.getElementsByClassName("playerID");
let getProject = document.getElementsByClassName("getProject");
let ProjectsList = document.getElementsByClassName("projects");
let overlay = document.getElementsByClassName("overlay")[0];
let overlayChildren = overlay.children;

// assign click function to open a player ID for the designated game
for(let i = 0; i < getPlayerID.length; i++) {
    getPlayerID[i].addEventListener("click", () => {
        overlay.style.display = "block";
        overlay.style.pointerEvents = "all";
        PlayerIDList[i].style.display = "block";
        PlayerIDList[i].style.zIndex = "3";
    })
}

for(let i = 0; i < ProjectsList.length; i++) {
    getProject[i].addEventListener("click", () => {
        overlay.style.display = "block";
        overlay.style.pointerEvents = "all";
        ProjectsList[i].style.display = "block";
        ProjectsList[i].style.zIndex = "3";
    })
}

// exit function to return to main html when clicking on the background, outside the id div
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.style.pointerEvents = "none";
    for(var i = 0; i < overlayChildren.length; i++)
    {
        overlayChildren[i].style.zIndex = "-1";
        overlayChildren[i].style.display = "none";
    }
})