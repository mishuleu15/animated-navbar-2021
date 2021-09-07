export const mobileNavMenu = (el) => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  li1.textContent = 'Home';
  li2.textContent = 'About';
  li3.textContent = 'Projects';
  li4.textContent = 'Contact';

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  nav.appendChild(ul);
  nav.classList.add('topNav');
  el.appendChild(nav);
  el.classList.add('hide');
};
