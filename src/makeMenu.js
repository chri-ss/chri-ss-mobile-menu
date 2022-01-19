import emojis from './images/emoji_symbols_black_24dp.svg';
import frontHand from './images/front_hand_black_24dp.svg';
import luggage from './images/luggage_black_24dp.svg';
import piano from './images/piano_black_24dp.svg';
import skateboard from './images/skateboarding_black_24dp.svg';
import menu from './images/menu_black_24dp.svg';

const makeMenu = () => {
  const body = document.querySelector('body');
  const title = document.createElement('div');
  const titleText = document.createElement('div');
  titleText.textContent = 'A nice menu';
  titleText.classList.add('title-text', 'hidden');
  const menuIcon = new Image();
  menuIcon.src = menu;

  const menuLink = document.createElement('a');
  menuLink.appendChild(menuIcon);
  menuLink.href = '#';
  menuIcon.classList.add('menu-link');

  title.appendChild(menuLink);
  title.appendChild(titleText);
  title.classList.add('title');
  const nav = document.createElement('ul');
  nav.appendChild(title);
  nav.classList.add('nav');
  const wrapper = document.createElement('ul');
  wrapper.classList.add('wrapper');
  nav.appendChild(wrapper);

  const menuItems = [emojis, frontHand, luggage, piano, skateboard];

  menuItems.forEach((item) => {
    const tab = document.createElement('li');
    tab.classList.add('tab');
    const innerLink = document.createElement('a');
    innerLink.classList.add('inner-link');
    innerLink.href = '#';
    const materialIcon = new Image();
    materialIcon.src = item;
    innerLink.appendChild(materialIcon);
    tab.appendChild(innerLink);
    wrapper.appendChild(tab);
  });

  nav.addEventListener('click', (e) => {
    if (e.target.className === 'inner-link') {
      e.target.classList.toggle('selected');
    }
  });

  nav.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'menu-link') {
      const tabs = Array.from(document.querySelectorAll('.tab'));
      const tabImages = Array.from(document.querySelectorAll('.tab > *'));
      tabs.forEach(tab => {
        tab.classList.toggle('wide');
      });

      tabImages.forEach((image) => {
        image.classList.toggle('wide');
      });

      console.log(tabImages);

      nav.classList.toggle('thick');
      titleText.classList.toggle('hidden');
    }
  });

  body.appendChild(nav);
};

export { makeMenu };
