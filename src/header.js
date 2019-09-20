const headerContent = () => {
    let content = document.getElementById("content");
    let headline = document.createElement('h1');    
    headline.textContent = "AYCE Buffet";

    let nav = document.createElement('nav');
    let menuItems = ["Home", "Menu", "Contact Us"]
    menuItems.forEach(item => {
        let div = document.createElement('div');
        div.textContent = item;
        nav.append(div);
    })
    let tabContent = document.createElement('div');
    tabContent.setAttribute("id", "tabContent");
    content.append(headline, nav, tabContent);
}

export default headerContent