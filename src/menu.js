const menuContent = () => {
    let content = document.getElementById("tabContent");    

    let para = document.createElement('p');
    para.textContent = "This should be a menu!";

    content.append(para);
}

export default menuContent