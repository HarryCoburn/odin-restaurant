const homePage = () => {
    let content = document.getElementById("content");
    let headline = document.createElement('h1');    
    headline.textContent = "This is a restaurant!"

    let para = document.createElement('p');
    para.textContent = "It has food!";

    let foodImg = document.createElement('img');
    foodImg.src = "./food.jpg";

    let para2 = document.createElement('p');
    para2.textContent = "See? Food! Come eat it! $12.99 per person."

    content.append(headline, para, foodImg, para2);
}

export default homePage