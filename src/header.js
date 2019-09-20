const headerContent = () => {
  const content = document.getElementById('content');
  const headline = document.createElement('h1');
  headline.textContent = 'AYCE Buffet';

  const nav = document.createElement('nav');
  const menuItems = ['Home', 'Menu', 'Contact Us'];
  menuItems.forEach(item => {
    const div = document.createElement('a');
    div.setAttribute('href', '#');
    div.textContent = item;
    div.id = item;
    nav.append(div);
  });
  const tabContent = document.createElement('div');
  tabContent.setAttribute('id', 'tabContent');
  content.append(headline, nav, tabContent);
};

export default headerContent;
