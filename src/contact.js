const contactContent = () => {
    let content = document.getElementById("tabContent");    

    let para = document.createElement('p');
    para.textContent = "Contact us via your psychic powers!";

    content.append(para);
}

export default contactContent