import './styles.css';
import menuItems from './templates/handlebar.hbs';
import menuJSON from './menu.json';
import Theme from './js/theme.js';

const refs = {
  body: document.querySelector('body'),
  menuItems: document.querySelector('.js-menu'),
  themeToggle: document.querySelector('#theme-switch-control')
}
checkTheme();
refs.menuItems.insertAdjacentHTML('beforeend', menuItems(menuJSON));
refs.themeToggle.addEventListener('change', changeTheme);

function changeTheme(e) {
 if(e.currentTarget.checked) {
   refs.body.classList.add(Theme.DARK);
   refs.body.classList.remove(Theme.LIGHT);
   localStorage.setItem('theme', Theme.DARK);
 }else{
   refs.body.classList.remove(Theme.DARK);
   refs.body.classList.add(Theme.LIGHT);
   localStorage.setItem('theme', Theme.LIGHT);
 }
}
function checkTheme() {
  if(localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.themeToggle.checked = true;
  } else {
  refs.body.classList.add(Theme.LIGHT);
  refs.themeToggle.checked = false;
  }
}