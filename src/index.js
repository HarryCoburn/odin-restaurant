import headerContent from './header.js';
import homeContent from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';

function switchTab(func) {
  const tabContent = document.getElementById('tabContent');
  tabContent.innerHTML = '';
  func();
}

function setHeaderEventHandlers() {
  const homeTab = document.getElementById('Home');
  const menuTab = document.getElementById('Menu');
  const contactTab = document.getElementById('Contact Us');

  homeTab.addEventListener('click', function() {
    switchTab(homeContent);
  });
  menuTab.addEventListener('click', function() {
    switchTab(menuContent);
  });
  contactTab.addEventListener('click', function() {
    switchTab(contactContent);
  });
}

headerContent();
setHeaderEventHandlers();
switchTab(homeContent);
