import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
  id,
}) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { src: image }),
      createElement('a', {
        className: 'character-anker',
        href: `/details.html?id=${id}`,
        innerText: 'Character Details',
      }),
      createElement('div', {
        className: 'character-card__info',
        children: [
          createElement('h2', { innerText: name }),
          createElement('p', { innerText: `${status} - ${species}` }),
          createElement('p', { innerText: origin.name }),
        ],
      }),
    ],
  });
}
