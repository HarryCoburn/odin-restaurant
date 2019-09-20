const menuContent = () => {
  const content = document.getElementById('tabContent');

  const para = document.createElement('p');
  para.textContent = 'This should be a menu!';

  content.append(para);
};

export default menuContent;
