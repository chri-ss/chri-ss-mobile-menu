import emojis from "./images/emoji_symbols_black_24dp.svg";
import frontHand from "./images/front_hand_black_24dp.svg";
import luggage from "./images/luggage_black_24dp.svg";
import piano from "./images/piano_black_24dp.svg";
import skateboard from "./images/skateboarding_black_24dp.svg";

const makeMenu = () => {
  const body = document.querySelector("body");
  const title = document.createElement('div');
  title.textContent = "A nice menu";
  title.classList.add('title');
  const nav = document.createElement("ul");
  nav.appendChild(title);
  nav.classList.add("nav");

  const menuItems = [emojis, frontHand, luggage, piano, skateboard];

  menuItems.forEach((item) => {
    const tab = document.createElement("li");
    tab.classList.add("tab");
    const innerLink = document.createElement("a");
    innerLink.classList.add("inner-link");
    innerLink.href = "#";
    const materialIcon = new Image();
    materialIcon.src = item;
    innerLink.appendChild(materialIcon);
    tab.appendChild(innerLink);
    nav.appendChild(tab);
  });

  nav.addEventListener("click", (e) => {
    if (e.target.className === "inner-link") {
      e.target.classList.toggle("selected");
    }
  });

  body.appendChild(nav);
};

export { makeMenu };
