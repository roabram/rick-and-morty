import './style.css';
import { createElement } from './utils/elements';
import { createCharacterElement } from './components/character';

const characters = [
  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },
  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },
];

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
      children: characters.map(createCharacterElement),
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
