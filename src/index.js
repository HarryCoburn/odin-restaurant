import headerContent from "./header.js";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import contactContent from "./contact.js";


function setHeaderEventHandlers() {
    let homeTab = document.getElementById("Home");
    let menuTab = document.getElementById("Menu");
    let contactTab = document.getElementById("Contact Us");
      

    homeTab.addEventListener("click", function(){switchTab(homeContent)});
    menuTab.addEventListener("click", function(){switchTab(menuContent)});
    contactTab.addEventListener("click", function(){switchTab(contactContent)});
}

function switchTab(func) {
    let tabContent = document.getElementById("tabContent");
    tabContent.innerHTML = "";    
    func();
}

headerContent();
setHeaderEventHandlers();
switchTab(homeContent);