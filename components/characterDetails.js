import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  image,
  name,
  status,
  species,
  origin,
  location,
  episode,
}) {
  return createElement('div', {
    className: styles['characters-card__detail'],
    children: [
      createElement('img', { src: image }),
      createElement('h2', { innerText: name }),
      createElement('p', { innerText: status }),
      createElement('p', { innerText: species }),
      createElement('p', { innerText: origin.name }),
      createElement('p', { innerText: location.name }),
      createElement('p', { innerText: 'First appearance: ' + episode[0] }),
      createElement('p', { innerText: 'and the second: ' + episode[1] }),
    ],
  });
}
