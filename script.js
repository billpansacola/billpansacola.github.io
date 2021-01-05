let start = document.getElementById("start");
let title = document.getElementsByTagName("title")[0];
start.addEventListener("click", () => {
    start.style.opacity = '0';
    start.style.zIndex = '-10';
    start.style.transition = 'all 0.5s';
    start.style.pointerEvents = 'none';
    start.style.animation = 'none !important';
    title.innerHTML = "Bill Pansacola";
})

// email overlay
let popUp = document.getElementsByClassName("pop-up")[0];
let gmail_overlay = document.getElementsByClassName("overlay")[0];
let gmail = document.getElementById("gmail");
gmail.addEventListener("click", () => {
    gmail_overlay.style.display = "block";
    gmail_overlay.style.pointerEvents = "all";
    popUp.style.display = "block";
})

gmail_overlay.addEventListener("click", () => {
    gmail_overlay.style.display = "none";
    gmail_overlay.style.pointerEvents = "none";
    popUp.style.display = "none";
})

// player id pop-ups
let getPlayerID = document.getElementsByClassName("getPlayerID");
let PlayerIDList = document.getElementsByClassName("playerID");
let overlay = document.getElementsByClassName("overlay")[1];
let overlayChildren = overlay.children;

// assign click function to open a player ID for the designated game
for(let i = 0; i < getPlayerID.length; i++) {
    getPlayerID[i].addEventListener("click", () => {
        overlay.style.display = "block";
        overlay.style.pointerEvents = "all";
        PlayerIDList[i].style.display = "block";
        switch(getPlayerID[i].id)
        {
            case "genshinID":
                PlayerIDList[i].style.zIndex = "3";
                break;
            case "ffID":
                PlayerIDList[i].style.zIndex = "3";
                break;
            case "gbfID":
                PlayerIDList[i].style.zIndex = "3";
                break;
            case "valID":
                PlayerIDList[i].style.zIndex = "3";
                break;
            default:
                break;
        }
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