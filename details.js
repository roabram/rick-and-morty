import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';

const mainElement = createElement('main', {
  className: styles.main,
  innerText: 'Hallo',
});

document.querySelector('#app').append(mainElement);
