const contactContent = () => {
  const content = document.getElementById('tabContent');

  const para = document.createElement('p');
  para.textContent = 'Contact us via your psychic powers!';

  content.append(para);
};

export default contactContent;
