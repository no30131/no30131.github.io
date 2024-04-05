/*  Request 1: Click to Change Text.
    When the user clicks on the "Welcome Message" 
    block, change the text to "Have a Good Time!". */

const mainTitle = 
    document.querySelector(".maintitle");
    
mainTitle.addEventListener("click", () => 
    mainTitle.querySelector("h1").textContent 
    = "Have a Good Time!");

/*  Request 2: Click to Show More Content Boxes.
    There are some more content boxes waiting to show. 
    When the user clicks the Call-to-Action button, 
    show those hidden content boxes.     */

const callToActionBtn = 
    document.querySelector(".calltoaction");

callToActionBtn.addEventListener("click", () => 
    document.querySelector(".container2").style.display = "flex")