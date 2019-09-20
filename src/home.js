const homeContent = () => {
    let content = document.getElementById("tabContent");    

    let para = document.createElement('p');
    para.textContent = "AYCE Buffet brings you the tastiest food and food accessories for your hunger needs.";

    let foodImg = document.createElement('img');
    foodImg.src = "./food.jpg";

    let para2 = document.createElement('p');
    para2.textContent = "See? Food! Come eat it! $12.99 per person. Open when the sign says open!"

    content.append(para, foodImg, para2);
}

export default homeContent