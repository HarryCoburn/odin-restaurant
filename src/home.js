const homeContent = () => {
  const content = document.getElementById('tabContent');

  const para = document.createElement('p');
  para.textContent =
    'AYCE Buffet brings you the tastiest food and food accessories for your hunger needs.';

  const foodImg = document.createElement('img');
  foodImg.src = './food.jpg';

  const para2 = document.createElement('p');
  para2.textContent =
    'See? Food! Come eat it! $12.99 per person. Open when the sign says open!';

  content.append(para, foodImg, para2);
};

export default homeContent;
