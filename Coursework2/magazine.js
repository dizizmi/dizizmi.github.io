
var popupnav = document.getElementById("navpopup");


function closeNavigation() {
    document.getElementById("navpopup").style.left= "-250px";
    document.getElementById("menuclose").style.display = "inline";
    document.getElementById("menuopen").style.display = "inline";
    
    
}

function openNavigation() {
    document.getElementById("navpopup").style.left = "0";
    document.getElementById("menuopen").style.display = "none";
    document.getElementbyId("menuclose").style.display = "inline";
    
}




