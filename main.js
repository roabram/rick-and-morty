import './style.css';
import { createElement } from './utils/elements';

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', {
          className: 'hero__title',
          innerText: 'Riick and Moorty',
        }),
        createElement('input', {
          className: 'input',
          placeholder: 'Character....',
          autofocus: true,
        }),
      ],
    }),
    createElement('section', {
      className: 'results',
      children: [createElement('div', { innerText: 'No result' })],
    }),
    createElement('footer', {
      className: 'footer',
      children: [
        createElement('small', {
          className: 'footer__trademark',
          children: [
            createElement('span', { innerText: 'Made with ' }),
            createElement('span', { className: 'primary', innerText: 'Beer' }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
